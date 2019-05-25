import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

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
    borderColor: '#B99CD7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
    position: 'relative'
  },
  cards: {
    position: 'absolute',
    zIndex: 2,
    width: 30,
    height: 30,
    backgroundColor: '#FF3366',
    top: -5,
    right: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberCards: {
    fontSize: 10,
    color: '#fff'
  },
  title: {
    fontFamily: 'yantramanav-black',
    fontSize: 20,
    color: '#68126C'
  },
  score: {
    fontFamily: 'yantramanav-thin',
    fontSize: 16,
    color: '#FF3366'
  }
});
