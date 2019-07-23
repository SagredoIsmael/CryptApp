import {combineReducers} from 'redux'
import dataCryptos from './dataCryptos'
import UI from './UI'

export const rootReducer = combineReducers({
  cryptos: dataCryptos,
  UI: UI
})
