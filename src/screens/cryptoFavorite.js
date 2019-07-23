import React from 'react'
import { connect } from 'react-redux'
import Colors from '../utils/constants'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import CryptoRow from '../components/cryptoRow'

class CryptoFavorite extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Cryptos favorites',
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
    const dataItem = Object.values(item)[0]
    const itemInfo = "Bid price:" + dataItem.bidPrice + "\nBid Qty:" + dataItem.bidQty + "\nAsk price:" + dataItem.askPrice + "\nAsk Qty:" + dataItem.askQty
    return (
      <CryptoRow
          title={dataItem.symbol}
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
