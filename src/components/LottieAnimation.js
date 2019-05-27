import React, { Component } from 'react';
import { View } from 'react-native';
import { DangerZone } from 'expo';

const { Lottie } = DangerZone;

class LottieAnimation extends Component {
  state = {
    fileAnimation: null
  };

  componentWillMount() {
    this._playAnimation();
  }

  _playAnimation = () => {
    if (!this.state.fileAnimation) {
      this._loadAnimation();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimation = () => {
    const { file } = this.props;
    this.setState({ fileAnimation: file }, this._playAnimation);
  };

  render() {
    const { fileAnimation } = this.state;
    const { loop, speed, width, height } = this.props;
    return (
      <View>
        {fileAnimation && (
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            source={fileAnimation}
            style={{
              width: width,
              height: height
            }}
            speed={speed}
            loop={loop}
          />
        )}
      </View>
    );
  }
}

export default LottieAnimation;
