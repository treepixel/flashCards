import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function LogoTitle({ title }) {
  return (
    <View style={styles.brand}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.imgBrand}
      />
      <Text style={styles.txtBrand}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  brand: {
    flexDirection: 'row'
  },
  imgBrand: {
    width: 24,
    height: 21.14,
    marginTop: 5,
    marginLeft: 15
  },
  txtBrand: {
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'yantramanav-black',
    fontSize: 20
  }
});
