import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LogoTitle from '../components/LogoTitle';

class Quiz extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="Quiz" />
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scoreBoard}>
          <View style={styles.score}>
            <Image
              style={styles.scoreImg}
              source={require('../../assets/trophy.png')}
            />
            <Text style={styles.scoreText}>5</Text>
          </View>
          <Text style={styles.scoreText}>2/15</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Framework Spring Boot</Text>
        </View>
      </View>
    );
  }
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3c2157',
    padding: 30
  },
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  score: {
    flexDirection: 'row'
  },
  scoreImg: {
    width: 12,
    height: 12,
    marginRight: 10,
    marginTop: 3
  },
  scoreText: {
    fontFamily: 'yantramanav-black',
    color: '#fff'
  },
  title: {
    width: '100%',
    padding: 5,
    backgroundColor: '#FF3366',
    borderRadius: 50,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontFamily: 'yantramanav-black',
    color: '#fff'
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: 'transparent',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5
  }
});
