import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Redux/store';
import { Header, CryptoContainer } from './src/Components';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header/>
          <CryptoContainer/>
        </View>
      </Provider>
    );
  }
}
