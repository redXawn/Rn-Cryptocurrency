import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from '../Redux/Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

  componentDidMount = () => {
    this.props.FetchCoinData()
  };
  
  renderCoinCards = () => {
    const { crypto } = this.props;
    if (crypto.isFetching){
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{color: '#253145'}}
            animation="fade"
          />
        </View>
      )
    }
    return crypto.data.map((coin, index) => 
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.quotes.USD.price}
        percent_change_24h={coin.quotes.USD.percent_change_24h}
        percent_change_7d={coin.quotes.USD.percent_change_7d}
      />
    )
  }

  render() {
    console.log('hehe', this.props.crypto)
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55,
  }
})

function mapStateToProps(state){
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
