import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import LogoTitle from '../components/LogoTitle';
import Card from '../components/Card';
import QuizResult from '../components/QuizResult';
import ScoreBoard from '../components/ScoreBoard';
import { primaryColor } from '../utils/colors';
import { connect } from 'react-redux';

class Quiz extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="Quiz" />
  };

  state = {
    isQuizFinished: false,
    cards: [],
    correctAnswers: 0,
    cardIndex: 0,
    score: 0
  };

  componentDidMount() {
    const { cards } = this.props;
    this.setState(() => ({ cards }));
  }

  renderCard = card => {
    return <Card card={card} onAnswer={this.handleAnswer} />;
  };

  swipedCard = () => {
    const { cardIndex, cards } = this.state;
    if (cardIndex + 1 < cards.length) {
      this.setState(prevState => ({
        cardIndex: prevState.cardIndex + 1
      }));
    }
  };

  handleAnswer = answer => {
    const { cardIndex, cards } = this.state;

    this.swiper.swipeLeft();

    if (answer === 'correct') {
      this.setState(prevState => ({
        correctAnswers: prevState.correctAnswers + 1,
        score: parseInt(((prevState.correctAnswers + 1) / cards.length) * 100)
      }));
    }

    if (cardIndex + 1 >= cards.length) {
      this.finishQuiz();
    }
  };

  finishQuiz = () => {
    const { score } = this.state;
    this.setState({
      isQuizFinished: true
    });
  };

  handleResetQuiz = () => {
    this.setState({
      isQuizFinished: false,
      correctAnswers: 0,
      cardIndex: 0
    });
  };

  render() {
    const {
      correctAnswers,
      isQuizFinished,
      cardIndex,
      cards,
      score
    } = this.state;
    const { title, deckId } = this.props;

    if (isQuizFinished) {
      return (
        <QuizResult
          score={score}
          deckId={deckId}
          onResetQuiz={this.handleResetQuiz}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          onSwiped={this.swipedCard}
          renderCard={this.renderCard}
          backgroundColor={primaryColor}
          stackSize={3}
          pointerEvents="box-none"
          cardVerticalMargin={100}
          stackAnimationFriction={100}
          disableBottomSwipe
          disableLeftSwipe
          disableRightSwipe
          disableTopSwipe
        >
          <ScoreBoard
            title={title}
            cards={cards}
            correctAnswers={correctAnswers}
            cardIndex={cardIndex}
          />
        </Swiper>
      </View>
    );
  }
}

mapStateToProps = ({ decks }, { navigation }) => ({
  title: decks[navigation.state.params.deckId].title,
  cards: decks[navigation.state.params.deckId].cards,
  deckId: navigation.state.params.deckId
});

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});
