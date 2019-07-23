import {REQUEST_DATA_CRYPTO, SUCCESS_DATA_CRYPTO, ERROR_DATA_CRYPTO, SHOW_LOCAL_DATA_CRYPTO, ADD_FAVORITE_CRYPTO, REMOVE_FAVORITE_CRYPTO } from './types'
import {retrieveLocalData} from '../reducers/dataCryptos'
import Binance from 'binance-api-react-native'
import NetInfo from "@react-native-community/netinfo"
import AsyncStorage from '@react-native-community/async-storage';
const client = Binance()

export const requestDataCrypto = () => {
  return {
    type: REQUEST_DATA_CRYPTO
  }
}

export const successDataCrypto = (newData, localData) => {
  return {
    type: SUCCESS_DATA_CRYPTO,
    payload: {data : {newData, localData}}
  }
}

export const showLocalDataCrypto = dataCrypto => {
  return {
    type: SHOW_LOCAL_DATA_CRYPTO,
    payload: dataCrypto
  }
}

export const addFavoriteCrypto = nameCrypto => {
  return {
    type: ADD_FAVORITE_CRYPTO,
    payload: nameCrypto
  }
}

export const removeFavoriteCrypto = nameCrypto => {
  return {
    type: REMOVE_FAVORITE_CRYPTO,
    payload: nameCrypto
  }
}



export const errorDataCrypto = () => {
  return {
    type: ERROR_DATA_CRYPTO
  }
}

export const fetchCryptos = () => (dispatch, getState) => {
  /*Check for connection internet*/
  NetInfo.fetch().then(state => {
    state.isConnected? _fetchCryptoAPI(dispatch, getState) : _getCryptoLocal(dispatch, getState)
  })
}

const _fetchCryptoAPI = async(dispatch, getState) => {
  /*Case: With connection*/

  if (getState().cryptos.loading) {
    return
  }

  dispatch(requestDataCrypto())
  const newData = await client.allBookTickers()
  if (newData != null){
    _checkLocaldata().then((localData) => {
      localData? dispatch(successDataCrypto(newData, localData)) : dispatch(successDataCrypto(newData))
    })
  }else{
    dispatch(errorDataCrypto(newData))
    _getCryptoLocal(dispatch, getState)
  }
}

const _getCryptoLocal = (dispatch, getState) => {
  /*Case: No connection, get local data*/
  _checkLocaldata().then((response) => {
    response? dispatch(showLocalDataCrypto(response)) : dispatch(errorDataCrypto(response))
  })
}

const _checkLocaldata = async () => {
  try {
    const value = await AsyncStorage.getItem('cryptosJSON')
    if (value != null && JSON.parse(value)){
      return JSON.parse(value)
    }
  } catch (error) {
      console.log('error get local data', error)
  }
  return null
}
