import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

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
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: 10
  },
  img: {
    width: 15,
    height: 15
  }
});
