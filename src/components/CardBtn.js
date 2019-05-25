import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CardBtn({ action, type }) {
  const getImage = type => {
    let image = require('../../assets/icon-correct.png');
    let style = { width: 35, height: 27 };

    if (type === 'error') {
      image = require('../../assets/icon-incorrect.png');
      style = { width: 25, height: 25 };
    }

    return <Image style={style} source={image} />;
  };

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        { borderColor: type === 'success' ? '#2AC940' : '#FF3366' }
      ]}
      onPress={action}
    >
      {getImage(type)}
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
    borderColor: '#FF3366',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
