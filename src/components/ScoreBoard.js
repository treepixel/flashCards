import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { secondColor, white } from '../utils/colors';

const ScoreBoard = ({ cardIndex, correctAnswers, cards, title }) => {
  return (
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
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export default ScoreBoard;

const styles = StyleSheet.create({
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
