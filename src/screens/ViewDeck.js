import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LogoTitle from '../components/LogoTitle';
import { withNavigation } from 'react-navigation';

class ViewDeck extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="Deck" />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.cards}>
            <Text style={{ color: '#FF3366', fontSize: 12 }}>55</Text>
          </View>
          <Text style={styles.title}>Framework Spring Boot</Text>
          <Text style={styles.score}>Max Score 80</Text>
          <View style={styles.btnArea}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('NewCard')}
            >
              <Image
                style={styles.btnImg}
                source={require('../../assets/plus-white-icon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.btnPink]}
              onPress={() => navigation.navigate('Quiz')}
            >
              <Image
                style={{ width: 30, height: 40 }}
                source={require('../../assets/motivational-speech.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(ViewDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3c2157'
  },
  content: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    borderTopRightRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  title: {
    fontFamily: 'yantramanav-black',
    color: '#FF3366',
    fontSize: 36,
    textAlign: 'center',
    lineHeight: 36
  },
  cards: {
    alignSelf: 'flex-end',
    marginVertical: 60,
    borderColor: '#FF3366',
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  score: {
    fontFamily: 'yantramanav-thin',
    color: '#3C2157',
    fontSize: 18,
    textAlign: 'center'
  },
  btnArea: {
    flexDirection: 'row',
    paddingVertical: 60
  },
  btn: {
    backgroundColor: '#894FC4',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 30
  },
  btnPink: {
    backgroundColor: '#FF3366'
  },
  btnImg: {
    width: 20,
    height: 20
  }
});
