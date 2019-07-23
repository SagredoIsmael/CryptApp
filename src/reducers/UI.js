import { SHOW_LOCAL_DATA_CRYPTO } from '../actions/types'

const initialState = {
  showAlertOffline : false
}

export default (state = initialState, action) => {
  switch(action.type){

    case SHOW_LOCAL_DATA_CRYPTO:
      console.log('test');
      return state

    default:
      return state
  }
}
