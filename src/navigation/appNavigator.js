import React from "react"
import {createStackNavigator, createAppContainer} from "react-navigation"
import MainTabNavigator from "./mainTabNavigator"

const AppStackNavigator = createStackNavigator({
  CryptoList: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  },
})

const AppNavigator = createAppContainer(AppStackNavigator)

export default AppNavigator
