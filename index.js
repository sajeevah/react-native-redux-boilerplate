import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/app/App';
import { name as appName } from './app.json';
import { store } from './src/app/store';
import { Provider } from 'react-redux';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
