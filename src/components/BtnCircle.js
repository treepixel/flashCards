import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { secondColor, green, purple, blue } from '../utils/colors';
import imgCorrect from '../../assets/icon-correct.png';
import imgIncorrect from '../../assets/icon-incorrect.png';
import imgDelete from '../../assets/garbage-white.png';
import imgAdd from '../../assets/plus-white-icon.png';
import imgQuiz from '../../assets/motivational-speech.png';

class BtnCircle extends Component {
  componentDidUpdate(prevProps) {
    const { disabled } = this.props;
    if (disabled !== prevProps.disabled) {
      const opacityValue = disabled ? 0.3 : 1;
      this.btn.setOpacityTo(opacityValue);
    }
  }

  btnStyle = {
    correct: {
      borderColor: green,
      backgroundColor: 'transparent',
      borderWidth: 1
    },
    incorrect: {
      borderColor: secondColor,
      backgroundColor: 'transparent',
      borderWidth: 1
    },
    quiz: { borderColor: 'transparent', backgroundColor: blue, borderWidth: 0 },
    add: {
      borderColor: 'transparent',
      backgroundColor: purple,
      borderWidth: 0
    },
    delete: {
      borderColor: 'transparent',
      backgroundColor: secondColor,
      borderWidth: 0
    }
  };

  styles = StyleSheet.create({
    btn: {
      margin: 15,
      borderRadius: 100,
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      ...this.btnStyle[this.props.type]
    }
  });

  getImage = type => {
    switch (type) {
      case 'correct':
        return <Image style={{ width: 35, height: 27 }} source={imgCorrect} />;
      case 'incorrect':
        return (
          <Image style={{ width: 25, height: 25 }} source={imgIncorrect} />
        );
      case 'quiz':
        return <Image style={{ width: 30, height: 40 }} source={imgQuiz} />;
      case 'delete':
        return <Image style={{ width: 17, height: 24 }} source={imgDelete} />;
      default:
        return <Image style={{ width: 20, height: 20 }} source={imgAdd} />;
    }
  };
  render() {
    const { type, onPress, disabled } = this.props;
    const opacityValue = disabled ? 0.3 : 1;
    return (
      <TouchableOpacity
        ref={btn => {
          this.btn = btn;
        }}
        style={[this.styles.btn, { opacity: opacityValue }]}
        onPress={!disabled ? onPress : null}
        activeOpacity={0.3}
      >
        {this.getImage(type)}
      </TouchableOpacity>
    );
  }
}

export default BtnCircle;
