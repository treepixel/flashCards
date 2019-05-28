import React, { Component } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import LogoTitle from '../components/LogoTitle';
import ListDecks from '../components/ListDecks';
import BtnAddDeck from '../components/BtnAddDeck';
import { primaryColor, white, purpleLight } from '../utils/colors';

class Home extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="Flash Cards" />,
    headerRight: <BtnAddDeck />
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerFind}>
          <Image
            style={styles.icon}
            source={require('../../assets/magnifier.png')}
          />
          <TextInput style={styles.findText} />
        </View>
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
    backgroundColor: primaryColor
  },
  containerFind: {
    marginTop: 10,
    marginBottom: 25,
    marginHorizontal: 20,
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 8,
    width: 20,
    height: 20,
    zIndex: 2
  },
  findText: {
    width: '100%',
    height: 36,
    paddingHorizontal: 20,
    backgroundColor: purpleLight,
    borderRadius: 15,
    color: white,
    fontFamily: 'yantramanav-black'
  }
});
