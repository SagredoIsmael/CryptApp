import {REQUEST_DATA_CRYPTO, SUCCESS_DATA_CRYPTO, ERROR_DATA_CRYPTO } from './types'
import Binance from 'binance-api-react-native'
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

export const errorDataCrypto = () => {
  return {
    type: ERROR_DATA_CRYPTO
  }
}

export const fetchCryptos = () => (dispatch, getState) => {
  _fetchCryptoAPI(dispatch, getState)
}

const _fetchCryptoAPI = async(dispatch, getState) => {
  if (getState().cryptos.loading) {
    return
  }
  dispatch(requestDataCrypto())
  const data = await client.allBookTickers()
  data? dispatch(successDataCrypto(data)) : dispatch(errorDataCrypto(data))
}
