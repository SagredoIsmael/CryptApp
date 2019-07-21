import { REQUEST_DATA_CRYPTO, SUCCESS_DATA_CRYPTO, ERROR_DATA_CRYPTO, SHOW_DATA_CRYPTO } from '../actions/types'
import AsyncStorage from '@react-native-community/async-storage';

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
      const items = Object.entries(action.payload).map((e) => ( { [e[0]]: e[1] } ))
      items.forEach(item => { item.isFavorite = false })
      _comprobeLocaldata(items).then((response) => {
        if (response != null)


        /*Save in local*/
        _saveLocalData(items)

      })




      return {
        ...state,
        loading: false,
        items: items
      }

    case SHOW_DATA_CRYPTO:
      return {
        ...state,
        loading: false,
        items: action.payload
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


const _saveLocalData = async (data) => {
  try {
    await AsyncStorage.setItem('cryptosJSON', JSON.stringify(data))
    } catch (error) {
      console.log('error saving local data', error)
    }
  }

const _comprobeLocaldata = async (newItems) => {
  try {
    const value = await AsyncStorage.getItem('cryptosJSON')
    if (value != null){
      let oldItems = JSON.parse(value)

      /*If local data exist, update local data crypto keeping the actual local favorites*/
      oldItems.filter(item => item.isFavorite)

      //TODO: update my favorites in newItems from oldItems
      return

    }else{
      return newItems
    }
  } catch (error) {
      console.log('error get local data', error)
  }
}
