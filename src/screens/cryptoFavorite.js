import React from 'react'
import { connect } from 'react-redux'
import Colors from '../utils/constants'
import { View, Text, FlatList, StyleSheet } from 'react-native'

class CryptoFavorite extends React.Component {

  //TODO similar flatList but only load item if item.isFavorite is true

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

  render() {
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default CryptoFavorite
