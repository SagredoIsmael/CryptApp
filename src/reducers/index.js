import {combineReducers} from 'redux'
import dataCryptos from './dataCryptos'

export const rootReducer = combineReducers({
  cryptos: dataCryptos,
})
