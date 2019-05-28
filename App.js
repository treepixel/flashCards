import React from 'react';
import MainNavigator from './src/routes';
import { AppLoading } from 'expo';
import cacheAssetsAsync from './src/utils/cacheAssetsAsync';
import { Provider } from 'react-redux';
import store from './src/store';

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
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      );
    } else {
      return <AppLoading />;
    }
  }
}
