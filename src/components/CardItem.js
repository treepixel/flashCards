import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import { secondColor, purple, purpleLight } from '../utils/colors';

const screenWidth = Dimensions.get('window').width * 0.8;

const CardItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image
          style={styles.img}
          source={require('../../assets/garbage.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Question</Text>
      <Text style={styles.text}>Does React Native work with Android?</Text>
      <Text style={styles.title}>Answer</Text>
      <Text style={styles.text}>Yes</Text>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    width: screenWidth,
    height: 240,
    borderWidth: 1,
    borderColor: purpleLight,
    borderRadius: 20,
    padding: 20,
    position: 'relative'
  },
  btn: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: secondColor,
    borderWidth: 1,
    borderRadius: 100
  },
  img: {
    width: 10,
    height: 13
  },
  title: {
    marginTop: 20,
    fontFamily: 'yantramanav-black',
    fontSize: 18,
    color: purple
  },
  text: {
    fontFamily: 'yantramanav-thin',
    fontSize: 16,
    color: secondColor
  }
});
