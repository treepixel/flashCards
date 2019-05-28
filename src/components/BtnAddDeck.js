import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { white } from '../utils/colors';

const BtnAddDeck = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('NewDeck')}
    >
      <Image
        style={styles.img}
        source={require('../../assets/plus-icon.png')}
      />
    </TouchableOpacity>
  );
};

export default withNavigation(BtnAddDeck);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: white,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: 20
  },
  img: {
    width: 15,
    height: 15
  }
});
