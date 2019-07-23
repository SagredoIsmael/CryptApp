import React from 'react'
import {Provider} from 'react-redux'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import AppNavigator from './navigation/appNavigator'
import Colors from './utils/constants'
import configureStore from "./configureStore"
import Binance from 'binance-api-react-native'
const client = Binance()

export default class App extends React.Component {

  constructor(props){
    super(props)
  }


  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />
        <StatusBar hidden={true} />
        </View>
      </Provider>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
})
