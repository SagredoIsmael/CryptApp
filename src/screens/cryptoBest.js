import React from 'react'
import { connect } from 'react-redux'
import Colors from '../utils/constants'
import { View, Text, StyleSheet } from 'react-native'
import CryptoRow from '../components/cryptoRow'

class CryptoBest extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Crypto major gainer',
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
    const { cryptos } = this.props
    return (
      <View styles={styles.container}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.starColor,
  },
})

const mapStateToProps = state => {
  return {
    cryptos: state.cryptos
  }
}

export default connect(mapStateToProps)(CryptoBest)
