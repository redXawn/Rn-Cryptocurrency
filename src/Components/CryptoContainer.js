import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class CryptoContainer extends Component {
  render() {
    return (
      <View>
        <Text> container </Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps)(CryptoContainer)
