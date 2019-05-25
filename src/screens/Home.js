import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LogoTitle from '../components/LogoTitle';
import ListDecks from '../components/ListDecks';
import BtnAddDeck from '../components/BtnAddDeck';

class Home extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="Flash Cards" />,
    headerRight: <BtnAddDeck />
  };
  render() {
    return (
      <View style={styles.container}>
        <ListDecks />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3c2157'
  },
  content: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    borderTopRightRadius: 60
  }
});
