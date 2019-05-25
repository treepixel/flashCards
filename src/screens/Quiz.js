import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { StyleSheet, Text, View, Image } from 'react-native';
import LogoTitle from '../components/LogoTitle';
import Card from '../components/Card';

// demo purposes only
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export default class DeckSwiper extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="Quiz" />
  };

  state = {
    cards: [...range(1, 5)],
    swipedAllCards: false,
    swipeDirection: '',
    cardIndex: 0
  };

  renderCard = (card, index) => {
    return <Card />;
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          backgroundColor={'#3c2157'}
          stackSize={3}
          pointerEvents="box-none"
          cardVerticalMargin={100}
          stackAnimationFriction={100}
          disableBottomSwipe
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
                <Text style={styles.scoreText}>5</Text>
              </View>
              <Text style={styles.scoreText}>2/15</Text>
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
    color: '#fff'
  },
  title: {
    width: '100%',
    padding: 5,
    backgroundColor: '#FF3366',
    borderRadius: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontFamily: 'yantramanav-black',
    color: '#fff'
  }
});
