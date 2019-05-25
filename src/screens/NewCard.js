import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';
import LogoTitle from '../components/LogoTitle';
import FloatingLabelInput from '../components/FloatingLabelInput';

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
    if (this.state.question.length > 1 && this.state.answer.length > 1) {
      alert('Card saved!');
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
                  question.length > 1 && answer.length > 1
                    ? '#FF3366'
                    : '#F2ADBE'
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

export default NewCard;

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
    fontFamily: 'yantramanav-thin',
    color: '#FF3366',
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
    color: '#68126C',
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
    color: '#fff',
    fontSize: 20
  }
});
