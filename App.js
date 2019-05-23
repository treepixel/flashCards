import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlashStatusBar from './components/FlashStatusBar';
import ListDecks from './components/ListDecks';
import { AppLoading } from 'expo';
import cacheAssetsAsync from './utils/cacheAssetsAsync';

export default class App extends React.Component {
  state = {
    appIsReady: false
  };

  async componentWillMount() {
    try {
      await cacheAssetsAsync({
        images: [require('./assets/logo.png')],
        fonts: [
          { 'yantramanav-black': require('./assets/Yantramanav-Black.ttf') },
          { 'yantramanav-thin': require('./assets/Yantramanav-Thin.ttf') }
        ]
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    const { appIsReady } = this.state;

    if (appIsReady) {
      return (
        <View style={styles.container}>
          <FlashStatusBar />
          <ListDecks />
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3c2157'
  },
  content: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    borderTopRightRadius: 60
  }
});
