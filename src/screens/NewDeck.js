import React, { Component } from 'react';
import LogoTitle from '../components/LogoTitle';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';
import {
  primaryColor,
  secondColor,
  white,
  purple,
  grey,
  pink
} from '../utils/colors';

class NewDeck extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle title="New Deck" />
  };

  state = {
    title: '',
    onFocused: false
  };

  handleChange = text => this.setState(() => ({ title: text }));
  handleFocus = () => this.setState(() => ({ onFocused: true }));
  handleSubmit = () => {
    if (this.state.title.length > 1) {
      alert('Deck saved!');
    }
  };

  render() {
    const { title, onFocused } = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
          <Text style={styles.title}>What is the title of your new deck?</Text>
          <TextInput
            style={[
              styles.text,
              { borderColor: onFocused ? secondColor : grey }
            ]}
            onChangeText={this.handleChange}
            onFocus={this.handleFocus}
            value={title}
            multiline={true}
            numberOfLines={2}
          />
          <TouchableOpacity
            style={[
              styles.btn,
              { backgroundColor: title.length > 1 ? secondColor : pink }
            ]}
            activeOpacity={title.length > 1 ? 0.5 : 1}
            onPress={this.handleSubmit}
          >
            <Text style={styles.btnText}>Add new deck</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default NewDeck;

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
    width: '100%',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontFamily: 'yantramanav-black',
    fontSize: 30,
    color: purple,
    marginVertical: 20
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
