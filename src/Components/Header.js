import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    const { header, headerContainer } = styles;
    return (
      <View style={headerContainer}>
        <Text style={header}>Cryptocurrency App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 55,
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})
