import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BtnCircle from './BtnCircle';
import { secondColor } from '../utils/colors';

export default function CardSide({ text, side, action }) {
  return (
    <View style={styles.container}>
      <View style={styles.areaText}>
        <Text style={styles.label}>{text}</Text>
      </View>
      {side === 'behind' && (
        <View style={styles.areaButtons}>
          <BtnCircle type="incorrect" onPress={() => action('incorrect')} />
          <BtnCircle type="correct" onPress={() => action('correct')} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  label: {
    fontSize: 26,
    fontFamily: 'yantramanav-thin',
    color: secondColor,
    textAlign: 'center',
    lineHeight: 26
  },
  areaButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
