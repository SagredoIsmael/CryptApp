import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native'
import Colors from '../utils/constants'
import { connect } from 'react-redux'
import { addFavoriteCrypto, removeFavoriteCrypto } from '../actions/cryptos'

const CryptoRow = ({ title, description, isFavorite, addFavoriteCrypto, removeFavoriteCrypto }) => (
    <View style={styles.container}>
        <Image style={styles.icon} source={ require('../utils/images/bitcoin.png') } />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </View>
        <TouchableOpacity onPress={() => isFavorite? removeFavoriteCrypto(title) : addFavoriteCrypto(title)}>
          <Image style={styles.imageFavorite} source={isFavorite? require('../utils/images/starSubscribe.png') : require('../utils/images/starUnsubscribe.png')} />
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:20,
        marginRight:20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: Colors.secondaryColor,
        elevation: 2,
    },
    icon: {
      height: 20,
      width: 20,
      marginTop: 10,
    },
    title: {
        fontSize: 20,
        color: 'black',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    imageFavorite:{
      height: 60,
      width: 60,
      marginRight:15,
      marginTop:15,
    }

})

const mapStateToProps = state => {
  return {
    cryptos: state.cryptos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteCrypto: (nameCrypto) => {
      dispatch(addFavoriteCrypto(nameCrypto))
    },
    removeFavoriteCrypto: (nameCrypto) => {
      dispatch(removeFavoriteCrypto(nameCrypto))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoRow)
