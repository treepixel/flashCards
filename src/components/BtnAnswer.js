import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { secondColor, green } from '../utils/colors';

export default function BtnAnswer({ onPress, type }) {
  getImage = type => {
    let image = require('../../assets/icon-correct.png');
    let style = { width: 35, height: 27 };

    if (type === 'incorrect') {
      image = require('../../assets/icon-incorrect.png');
      style = { width: 25, height: 25 };
    }

    return <Image style={style} source={image} />;
  };

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        { borderColor: type === 'correct' ? green : secondColor }
      ]}
      onPress={() => onPress(type)}
    >
      {this.getImage(type)}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 100,
    width: 80,
    height: 80,
    borderColor: secondColor,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
