import { REQUEST_DATA_CRYPTO, SUCCESS_DATA_CRYPTO, ERROR_DATA_CRYPTO, UPDATE_DATA_CRYPTO } from '../actions/types'
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
      _retrieveData()
      const items = Object.entries(action.payload).map((e) => ( { [e[0]]: e[1] } ))
      items.forEach(item => { item.isFavourite = false })

      /*Save in local*/
      _storeData(items)

      return {
        ...state,
        loading: false,
        items: items
      }



    case UPDATE_DATA_CRYPTO:
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


const _storeData = async (data) => {
        try {
            await AsyncStorage.setItem('cryptosJSON', JSON.stringify(data))
        } catch (error) {
            console.log('error saving local data', error)
        }
    }

const _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('cryptosJSON')
        if (value !== null) {
          console.log(JSON.parse(value))
        }
    } catch (error) {
        console.log('error get local data', error)
    }
}
