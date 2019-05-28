import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DeckItem from './DeckItem';
import { secondColor, white } from '../utils/colors';

class ListDecks extends Component {
  keyExtractor = item => item.id;

  renderItem = ({ item }) => {
    return <DeckItem item={item} />;
  };

  render() {
    const { decks } = this.props;
    return (
      <View style={styles.content}>
        <Text style={styles.title}>Decks</Text>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          style={styles.listDecks}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default ListDecks;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: white,
    borderTopRightRadius: 60,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'yantramanav-thin',
    color: secondColor,
    fontSize: 20,
    marginBottom: 20
  },
  listDecks: {
    width: '100%',
    paddingHorizontal: 20
  }
});
