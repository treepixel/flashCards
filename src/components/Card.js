import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import CardFlip from 'react-native-card-flip';
import CardSide from './CardSide';
import { white } from '../utils/colors';

const screenWidth = Dimensions.get('window').width * 0.9;
const screenHeight = Dimensions.get('window').height * 0.7;

class Card extends Component {
  render() {
    const { onAnswer } = this.props;
    return (
      <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
        <TouchableWithoutFeedback onPress={() => this.card.flip()}>
          <View style={styles.card}>
            <CardSide text="AB" side="front" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.card.flip()}>
          <View style={styles.card}>
            <CardSide text="CD" side="behind" action={onAnswer} />
          </View>
        </TouchableWithoutFeedback>
      </CardFlip>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  card: {
    width: screenWidth,
    height: screenHeight,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    elevation: 4,
    shadowRadius: 10,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.5
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  }
});
