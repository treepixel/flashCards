import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CardItem from './CardItem';
import { secondColor } from '../utils/colors';

const ListCards = ({ cards }) => {
  keyExtractor = item => item.id;

  renderItem = ({ item }) => {
    return <CardItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cards</Text>
      <FlatList
        horizontal
        renderItem={this.renderItem}
        data={cards}
        showsHorizontalScrollIndicator={false}
        keyExtractor={this.keyExtractor}
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
