import { REQUEST_DATA_CRYPTO, SUCCESS_DATA_CRYPTO, ERROR_DATA_CRYPTO } from '../actions/types'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type){

    case REQUEST_DATA_CRYPTO:
      return {
        ...state,
        loading: true,
        error: null
      }

    case SUCCESS_DATA_CRYPTO:
      return {
        ...state,
        loading: false,
        items: Object.entries(action.payload).map((e) => ( { [e[0]]: e[1] } ))
      }

    case ERROR_DATA_CRYPTO:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: []
      }

    default:
      return state
  }
}
