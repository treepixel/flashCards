import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardBtn from './CardBtn';

export default function CardSide({ text, side }) {
  return (
    <View style={styles.container}>
      <View style={styles.areaText}>
        <Text style={styles.label}>{text}</Text>
      </View>
      {side === 'behind' && (
        <View style={styles.areaButtons}>
          <CardBtn type="success" />
          <CardBtn type="error" />
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
    alignItems: 'center'
  },
  label: {
    fontSize: 36,
    fontFamily: 'yantramanav-thin',
    color: '#FF3366',
    textAlign: 'center'
  },
  areaButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
