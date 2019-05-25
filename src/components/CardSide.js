import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CardBtn from './CardBtn';

export default function CardSide({ text, flip, side }) {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.card} onPress={flip}>
      <View style={styles.areaText}>
        <Text style={styles.label}>{text}</Text>
      </View>
      {side === 'behind' && (
        <View style={styles.areaButtons}>
          <CardBtn type="success" />
          <CardBtn type="error" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.5
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
