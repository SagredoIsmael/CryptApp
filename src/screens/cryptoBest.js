import React from 'react'
import { connect } from 'react-redux'
import Colors from '../utils/constants'
import { View, Text, StyleSheet, Image } from 'react-native'
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
      <View style={styles.container}>
          <View style={styles.mainView}>
              <Text style={styles.alertTitle}>The top major gainer of the last 24h is.. </Text>
              <Text style={styles.alertTitle}>ETHBTC </Text>
              <Image style={styles.image} source={ require('../utils/images/trophy.png') } />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '5%'
  },
  mainView:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : Colors.primaryColor,
    height: '80%' ,
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius:7,
  },
  alertTitle:{
    fontSize: 22,
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '28%'
  },
  image:{
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const mapStateToProps = state => {
  return {
    cryptos: state.cryptos
  }
}

export default connect(mapStateToProps)(CryptoBest)
