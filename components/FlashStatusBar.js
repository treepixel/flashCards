import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FlashStatusBar() {
  return (
    <View style={styles.statusBar}>
      <View style={styles.brand}>
        <Image source={require('../assets/logo.png')} style={styles.imgBrand} />
        <Text style={styles.txtBrand}>Flash Cards</Text>
      </View>
      <TouchableOpacity style={styles.btnAddDeck}>
        <Image
          source={require('../assets/plus-icon.png')}
          style={{ width: 15, height: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  brand: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop: 20
  },
  imgBrand: {
    width: 24,
    height: 21.14,
    marginTop: 5,
    marginLeft: 5
  },
  txtBrand: {
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'yantramanav-black',
    fontSize: 20
  },
  btnAddDeck: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 10
  }
});
