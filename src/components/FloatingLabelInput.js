import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

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
      <View style={{ paddingTop: 18, width: '100%', marginVertical: 20 }}>
        <Text
          style={[
            styles.label,
            {
              top: !isFocused && !value ? 18 : 0,
              fontSize: !isFocused && !value ? 18 : 14,
              color: !isFocused ? '#aaa' : '#FF3366'
            }
          ]}
        >
          {label}
        </Text>
        <TextInput
          {...props}
          style={[
            styles.text,
            { borderBottomColor: !isFocused ? '#555' : '#FF3366' }
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
  label: {
    position: 'absolute',
    left: 0,
    fontFamily: 'yantramanav-thin'
  },
  text: {
    height: 30,
    fontSize: 18,
    fontFamily: 'yantramanav-black',
    color: '#68126C',
    borderBottomWidth: 1
  }
});
