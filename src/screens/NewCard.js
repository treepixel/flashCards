import React, { Component } from 'react';
import LogoTitle from '../components/LogoTitle';
import FloatingLabelInput from '../components/FloatingLabelInput';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';
import {
  primaryColor,
  secondColor,
  white,
  purple,
  pink
} from '../utils/colors';
import { connect } from 'react-redux';
import { addCardRequest } from '../store/actions';
import { generateUID } from '../utils/helpers';

class NewCard extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="New Card" />
  };

  state = {
    question: '',
    answer: ''
  };

  handleQuestion = text => this.setState(() => ({ question: text }));
  handleAnswer = text => this.setState(() => ({ answer: text }));

  handleSubmit = () => {
    const { question, answer } = this.state;
    const { createCard, navigation } = this.props;
    const id = generateUID();

    if (question.length > 1 && answer.length > 1) {
      createCard(
        {
          id,
          question,
          answer,
          timestamp: Date.now()
        },
        navigation.state.params.deckId
      );
    }
  };

  render() {
    const { question, answer, questionFocused, answerFocused } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
          <Text style={styles.title}>Write your new card</Text>
          <FloatingLabelInput
            label="Question"
            value={question}
            onChangeText={this.handleQuestion}
          />
          <FloatingLabelInput
            label="Answer"
            value={answer}
            onChangeText={this.handleAnswer}
          />
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor:
                  question.length > 1 && answer.length > 1 ? secondColor : pink
              }
            ]}
            activeOpacity={question.length > 1 && answer.length > 1 ? 0.5 : 1}
            onPress={this.handleSubmit}
          >
            <Text style={styles.btnText}>Add new deck</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

mapDispatchToProps = dispatch => ({
  createCard: (card, deckId) => dispatch(addCardRequest(card, deckId))
});

export default connect(
  null,
  mapDispatchToProps
)(NewCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: primaryColor
  },
  content: {
    flex: 1,
    backgroundColor: white,
    borderTopRightRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  title: {
    fontFamily: 'yantramanav-thin',
    color: secondColor,
    fontSize: 36,
    textAlign: 'center',
    lineHeight: 36
  },
  text: {
    height: 60,
    width: '100%',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontFamily: 'yantramanav-black',
    fontSize: 18,
    color: purple,
    marginVertical: 10
  },
  btn: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    margin: 30
  },
  btnText: {
    fontFamily: 'yantramanav-thin',
    color: white,
    fontSize: 20
  }
});
