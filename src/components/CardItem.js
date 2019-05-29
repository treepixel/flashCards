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
import { connect } from 'react-redux';
import { deleteCardRequest } from '../store/actions';

const screenWidth = Dimensions.get('window').width * 0.8;

const CardItem = ({ item, deckId, deleteCard }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => deleteCard(item.id, deckId)}
      >
        <Image
          style={styles.img}
          source={require('../../assets/garbage.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Question</Text>
      <Text style={styles.text}>{item.question}</Text>
      <Text style={styles.title}>Answer</Text>
      <Text style={styles.text}>{item.answer}</Text>
    </View>
  );
};

mapDispatchToProps = dispatch => ({
  deleteCard: (id, deckId) => dispatch(deleteCardRequest(id, deckId))
});

export default connect(
  null,
  mapDispatchToProps
)(CardItem);

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    width: screenWidth,
    height: 300,
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
    marginTop: 10,
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
