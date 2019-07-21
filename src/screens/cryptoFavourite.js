import React from 'react'
import { connect } from 'react-redux'
import Colors from '../utils/constants'
import { View, Text, FlatList, StyleSheet } from 'react-native'

class CryptoFavourite extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Cryptos favourites',
      headerTitleStyle: {
        color: 'white',
        fontSize: 28
      },
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
    }
  }

  render() {
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


export default CryptoFavourite
