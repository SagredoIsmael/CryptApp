import { REQUEST_DATA_CRYPTO, SUCCESS_DATA_CRYPTO, ERROR_DATA_CRYPTO, SHOW_DATA_CRYPTO, ADD_FAVORITE_CRYPTO, REMOVE_FAVORITE_CRYPTO  } from '../actions/types'
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
      /*Mapping to array objects*/
      const items = Object.entries(action.payload).map((e) => ( { [e[0]]: e[1] } ))
      /*Add favorite property*/
      items.forEach(item => { item.isFavorite = false })

      _checkLocaldata(items).then((response) => {


        /*Save in local*/
        _saveLocalData(response)

        return {
          ...state,
          loading: false,
          items: response
        }
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

    case ADD_FAVORITE_CRYPTO:
    /*Find my item in cryptos and change property 'favorite'*/
     let updatedItems = state.items.map(item => { return Object.keys(item)[0] == action.payload? {...item, isFavorite : true} : item})

      return {
        ...state,
        items: updatedItems
      }

    case REMOVE_FAVORITE_CRYPTO:
    /*Find my item in cryptos and change property 'favorite'*/
     let updatedCryptos = state.items.map(item => { return Object.keys(item)[0] == action.payload? {...item, isFavorite : false} : item})

      return {
        ...state,
        items: updatedCryptos
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

const _checkLocaldata = async (newItems) => {
  try {
    const value = await AsyncStorage.getItem('cryptosJSON')
    if (value != null){
      let localItems = JSON.parse(value)

      /*If local data exist, update local data crypto keeping the actual local favorites*/
      localItems.filter(item => item.isFavorite)

      console.log(localItems);

    }
  } catch (error) {
      console.log('error get local data', error)
  }
  return newItems
}
