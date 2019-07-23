import React from "react"
import {Platform, Image} from "react-native"
import {createStackNavigator, createBottomTabNavigator} from "react-navigation"
import CryptoListScreen from "../screens/cryptoList"
import CryptoFavoriteScreen from "../screens/cryptoFavorite"
import CryptoBestScreen from "../screens/cryptoBest"
import Colors from '../utils/constants'

const CryptoListStack = createStackNavigator({Cryptos: CryptoListScreen})

CryptoListStack.navigationOptions = {
  tabBarLabel: "LIVE",
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
        {
          return (
            <Image
              source={ require('../utils/images/bitcoin.png') }
              style={{ width: 24, height: 24, }} />
          );
        }
      },
  tabBarOptions: {
  activeTintColor: 'black',
  inactiveTintColor: 'grey',
  labelStyle: {
    fontSize: 10,
  },
  style: {
    backgroundColor: Colors.thirdColor,
  },
  }
}

const CryptoFavoriteStack = createStackNavigator({Favorites: CryptoFavoriteScreen})

CryptoFavoriteStack.navigationOptions = {
  tabBarLabel: "FAV",
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
        {
          return (
            <Image
              source={ require('../utils/images/heart.png') }
              style={{ width: 24, height: 24, }} />
          );
        }
      },
  tabBarOptions: {
  activeTintColor: 'black',
  inactiveTintColor: 'grey',
  labelStyle: {
    fontSize: 10,
  },
  style: {
    backgroundColor: Colors.thirdColor,
  },
  }
}

const CryptoBestStack = createStackNavigator({Best: CryptoBestScreen})

CryptoBestStack.navigationOptions = {
  tabBarLabel: "BEST",
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
        {
          return (
            <Image
              source={ require('../utils/images/best.png') }
              style={{ width: 24, height: 24, }} />
          );
        }
      },
  tabBarOptions: {
  activeTintColor: 'black',
  inactiveTintColor: 'grey',
  labelStyle: {
    fontSize: 10,
  },
  style: {
    backgroundColor: Colors.thirdColor,
  },
  }
}

export default createBottomTabNavigator({CryptoListStack, CryptoBestStack, CryptoFavoriteStack})
