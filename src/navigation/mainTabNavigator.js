import React from "react"
import {Platform} from "react-native"
import {createStackNavigator, createBottomTabNavigator} from "react-navigation"
import CryptoListScreen from "../screens/cryptoList"
import CryptoFavouriteScreen from "../screens/cryptoFavourite"

const CryptoListStack = createStackNavigator({Cryptos: CryptoListScreen});

CryptoListStack.navigationOptions = {
  tabBarLabel: "Cryptos NOW",
}

const CryptoFavouriteStack = createStackNavigator({Favourites: CryptoFavouriteScreen});

CryptoFavouriteStack.navigationOptions = {
  tabBarLabel: "Favourites"
}

export default createBottomTabNavigator({CryptoListStack, CryptoFavouriteStack});
