import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { secondColor, purple, grey, greyDark } from '../utils/colors';

class FloatingLabelInput extends Component {
  state = {
    isFocused: false
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const { value } = this.props;
    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.label,
            {
              top: !isFocused && !value ? 18 : 0,
              fontSize: !isFocused && !value ? 18 : 14,
              color: !isFocused ? grey : secondColor
            }
          ]}
        >
          {label}
        </Text>
        <TextInput
          {...props}
          style={[
            styles.text,
            { borderBottomColor: !isFocused ? greyDark : secondColor }
          ]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}

export default FloatingLabelInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    width: '100%',
    marginVertical: 20
  },
  label: {
    position: 'absolute',
    left: 0,
    fontFamily: 'yantramanav-thin'
  },
  text: {
    height: 30,
    fontSize: 18,
    fontFamily: 'yantramanav-black',
    color: purple,
    borderBottomWidth: 1
  }
});
