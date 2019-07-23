import { SHOW_MODAL_OFFLINE, HIDDEN_MODAL_OFFLINE } from '../actions/types'

const initialState = {
  isOpenModalOffline : false
}

export default (state = initialState, action) => {
  switch(action.type){

    case SHOW_MODAL_OFFLINE:
      return {...state, isOpenModalOffline: true}

    case HIDDEN_MODAL_OFFLINE:
      return {...state, isOpenModalOffline: false}


    default:
      return state
  }
}
