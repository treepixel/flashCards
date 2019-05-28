import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import LogoTitle from '../components/LogoTitle';
import Card from '../components/Card';
import QuizResult from '../components/QuizResult';
import { secondColor, white, purple, purpleLight, primaryColor } from '../utils/colors';

// demo purposes only
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export default class Quiz extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="Quiz" />
  };

  state = {
    isQuizFinished: false,
    cards: [],
    correctAnswers: 0,
    cardIndex: 0
  };

  componentDidMount() {
    this.setState(() => ({ cards: [...range(1, 2)] }));
  }

  renderCard = (card, index) => {
    return <Card onAnswer={this.handleAnswer} />;
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
        correctAnswers: prevState.correctAnswers + 1
      }));
    }

    if (cardIndex + 1 >= cards.length) {
      this.setState(prevState => ({
        isQuizFinished: true
      }));
    }
  };

  handleResetQuiz = () => {
    this.setState({
      isQuizFinished: false,
      correctAnswers: 0,
      cardIndex: 0
    });
  };

  render() {
    const { correctAnswers, isQuizFinished, cardIndex, cards } = this.state;

    if (isQuizFinished) {
      return (
        <QuizResult
          correctAnswers={correctAnswers}
          cards={cards.length}
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
          <View style={styles.containerScore}>
            <View style={styles.scoreBoard}>
              <View style={styles.score}>
                <Image
                  style={styles.scoreImg}
                  source={require('../../assets/trophy.png')}
                />
                <Text style={styles.scoreText}>{correctAnswers}</Text>
              </View>
              <Text style={styles.scoreText}>
                {cardIndex + 1}/{cards.length}
              </Text>
            </View>
            <View style={styles.title}>
              <Text style={styles.titleText}>Framework Spring Boot</Text>
            </View>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  containerScore: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  score: {
    flexDirection: 'row'
  },
  scoreImg: {
    width: 12,
    height: 12,
    marginRight: 10,
    marginTop: 3
  },
  scoreText: {
    fontFamily: 'yantramanav-black',
    color: white
  },
  title: {
    width: '100%',
    padding: 5,
    backgroundColor: secondColor,
    borderRadius: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontFamily: 'yantramanav-black',
    color: white
  }
});
