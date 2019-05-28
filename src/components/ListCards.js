import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CardItem from './CardItem';
import { secondColor } from '../utils/colors';

const cards = [
  { key: '1', question: 'Does React Native work with Android?', answer: 'Yes' },
  { key: '2', question: 'Does React Native work with Android?', answer: 'Yes' },
  { key: '3', question: 'Does React Native work with Android?', answer: 'Yes' },
  { key: '4', question: 'Does React Native work with Android?', answer: 'Yes' }
];

const ListCards = () => {
  renderItem = ({ item }) => {
    return <CardItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cards</Text>
      <FlatList
        horizontal
        renderItem={this.renderItem}
        data={cards}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListCards;

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  title: {
    fontFamily: 'yantramanav-thin',
    color: secondColor,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 10
  }
});
