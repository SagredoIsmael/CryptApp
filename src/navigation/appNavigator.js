import React from "react"
import {createStackNavigator, createAppContainer} from "react-navigation"
import CryptoList from "../screens/cryptoList"


const AppStackNavigator = createStackNavigator({
  CryptoList: {
    screen: CryptoList
  },
})

const AppNavigator = createAppContainer(AppStackNavigator)

export default AppNavigator
