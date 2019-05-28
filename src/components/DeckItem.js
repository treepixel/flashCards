import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { secondColor, white, purple, grey } from '../utils/colors';

const DeckItem = ({ title, score, cards, navigation }) => {
  return (
    <TouchableOpacity
      style={{ marginVertical: 15 }}
      onPress={() => navigation.navigate('ViewDeck')}
    >
      <View style={styles.item}>
        <View style={styles.cards}>
          <Text style={styles.numberCards}>{cards}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.score}>Max score: {score}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(DeckItem);

const styles = StyleSheet.create({
  item: {
    borderRadius: 40,
    borderWidth: 0.8,
    borderColor: grey,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
    position: 'relative',
    marginVertical: -3
  },
  cards: {
    position: 'absolute',
    zIndex: 2,
    width: 30,
    height: 30,
    backgroundColor: secondColor,
    top: -5,
    right: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberCards: {
    fontSize: 10,
    color: white
  },
  title: {
    fontFamily: 'yantramanav-black',
    fontSize: 20,
    color: purple
  },
  score: {
    fontFamily: 'yantramanav-thin',
    fontSize: 16,
    color: secondColor
  }
});
