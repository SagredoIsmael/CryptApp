import React from "react"
import {Platform} from "react-native"
import {createStackNavigator, createBottomTabNavigator} from "react-navigation"
import CryptoListScreen from "../screens/cryptoList"
import CryptoFavouriteScreen from "../screens/cryptoFavourite"
import Icon from "react-native-vector-icons/Ionicons"
import Colors from "../constants/Colors"

const CryptoListStack = createStackNavigator({Cryptos: CryptoListScreen});

RutasStack.navigationOptions = {
  tabBarLabel: "Cryptos NOW",
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} size={32} name={Platform.OS === "ios"
      ? `ios-logo-bitcoin${focused
        ? ""
        : ""}`
      : "md-logo-bitcoin"
}/>)
};

const CryptoFavouriteStack = createStackNavigator({Favourites: CryptoFavouriteScreen});

RutasStack.navigationOptions = {
  tabBarLabel: "Favourites",
  tabBarIcon: ({focused}) => (<TabBarIcon focused={focused} name={Platform.OS === "ios"
      ? `ios-heart${focused
        ? ""
        : ""}`
      : "md-heart"
}/>)
};

export default createBottomTabNavigator({RutasStack, MapRoutesStack, PerfilStack, MisRutasStack});
