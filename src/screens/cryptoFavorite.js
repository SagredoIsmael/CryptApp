import React from 'react'
import { connect } from 'react-redux'
import Colors from '../utils/constants'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import CryptoRow from '../components/cryptoRow'

class CryptoFavorite extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Crypto pairs favorites',
      headerTitleStyle: {
        color: 'white',
        fontSize: 28
      },
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
    }
  }

  renderItem = ({ item }) => {
    const itemInfo = "Bid price:" + item.bidPrice + "\nBid Qty:" + item.bidQty + "\nAsk price:" + item.askPrice + "\nAsk Qty:" + item.askQty
    return (
      <CryptoRow
          title={item.symbol}
          description={itemInfo}
          isFavorite={item["isFavorite"]}
      />
    )
  }

  render() {
    const { cryptos } = this.props
    return (
      <FlatList
        styles={styles.container}
        data={cryptos.items.filter(item => (item.isFavorite == true))}
        renderItem={this.renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.starColor,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})

const mapStateToProps = state => {
  return {
    cryptos: state.cryptos
  }
}

export default connect(mapStateToProps)(CryptoFavorite)
