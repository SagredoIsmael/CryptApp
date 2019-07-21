import {REQUEST_DATA_CRYPTO, SUCCESS_DATA_CRYPTO, ERROR_DATA_CRYPTO, SHOW_DATA_CRYPTO } from './types'
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

export const successDataCrypto = dataCrypto => {
  return {
    type: SUCCESS_DATA_CRYPTO,
    payload: dataCrypto
  }
}

export const showDataCrypto = dataCrypto => {
  return {
    type: SHOW_DATA_CRYPTO,
    payload: dataCrypto
  }
}

export const errorDataCrypto = () => {
  return {
    type: ERROR_DATA_CRYPTO
  }
}

export const fetchCryptos = () => (dispatch, getState) => {
  NetInfo.fetch().then(state => {
    state.isConnected? _fetchCryptoAPI(dispatch, getState) : _getCryptoLocal(dispatch, getState)
  })
}

const _fetchCryptoAPI = async(dispatch, getState) => {
  if (getState().cryptos.loading) {
    return
  }
  dispatch(requestDataCrypto())
  const data = await client.allBookTickers()
  data? dispatch(successDataCrypto(data)) : dispatch(errorDataCrypto(data))
}

const _getCryptoLocal = async(dispatch, getState) => {
   try {
     const value = await AsyncStorage.getItem('cryptosJSON')
     value? dispatch(showDataCrypto(JSON.parse(value))) : dispatch(errorDataCrypto(value))
   } catch (error) {
       console.log('error get local data', error)
   }
}
