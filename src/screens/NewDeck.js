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
              { borderColor: onFocused ? '#FF3366' : '#ccc' }
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
              { backgroundColor: title.length > 1 ? '#FF3366' : '#F2ADBE' }
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
    width: '100%',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontFamily: 'yantramanav-black',
    fontSize: 30,
    color: '#68126C',
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
    color: '#fff',
    fontSize: 20
  }
});
