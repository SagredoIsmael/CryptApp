import {REQUEST_DATA_CRYPTO, SUCCESS_DATA_CRYPTO, ERROR_DATA_CRYPTO } from './types'

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
