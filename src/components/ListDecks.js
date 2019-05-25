import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DeckItem from './DeckItem';
import getDecks from '../utils/decks';

class ListDecks extends Component {
  renderItem = ({ item }) => {
    return <DeckItem {...item} />;
  };

  render() {
    const decks = getDecks();
    return (
      <View style={styles.content}>
        <Text style={styles.title}>Decks</Text>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          style={styles.listDecks}
        />
      </View>
    );
  }
}

export default ListDecks;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    borderTopRightRadius: 60,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'yantramanav-thin',
    color: '#FF3366',
    fontSize: 20,
    marginBottom: 20
  },
  listDecks: {
    width: '100%',
    paddingHorizontal: 30
  }
});
