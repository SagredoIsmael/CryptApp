import { REQUEST_DATA_CRYPTO, SUCCESS_DATA_CRYPTO, ERROR_DATA_CRYPTO, SHOW_LOCAL_DATA_CRYPTO, ADD_FAVORITE_CRYPTO, REMOVE_FAVORITE_CRYPTO  } from '../actions/types'
import AsyncStorage from '@react-native-community/async-storage'

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
      let items = Object.entries(action.payload.data.newData).map((e) => ( { [e[0]]: e[1] } ))

      /*If local data exist, update local data crypto keeping the actual local favorites*/
      if (action.payload.data.localData){
        /*Find my favorites and get name (name crypto is our ID)*/
        let myFavorites = action.payload.data.localData.filter(item => (item.isFavorite == true)).map(item => (Object.keys(item)[0]))

        /*Replace 'isFavorite' property of myFavorites items*/
        let finalItems = items.map(item => {
          const dataItem = Object.values(item)[0]

          if (myFavorites.indexOf(dataItem.symbol) > -1){
            return {...item, isFavorite : true}
          }else{
            return {...item, isFavorite : false}
          }
        })

        /*Save in local*/
        _saveLocalData(finalItems)

        return {
          ...state,
          loading: false,
          items: finalItems
        }
      }else{
        items.map(item => { item.isFavorite = false })

        /*Save in local*/
        _saveLocalData(items)

        return {
          ...state,
          loading: false,
          items: items
        }
      }

    case SHOW_LOCAL_DATA_CRYPTO:
      return {
        ...state,
        loading: false,
        items: action.payload
      }

    case ADD_FAVORITE_CRYPTO:
    /*Find my item in cryptos and change property 'favorite'*/
     let updatedItems = state.items.map(item => { return Object.keys(item)[0] == action.payload? {...item, isFavorite : true} : item})

     /*Save in local*/
     _saveLocalData(updatedItems)

      return {
        ...state,
        items: updatedItems
      }

    case REMOVE_FAVORITE_CRYPTO:
    /*Find my item in cryptos and change property 'favorite'*/
     let updatedCryptos = state.items.map(item => { return Object.keys(item)[0] == action.payload? {...item, isFavorite : false} : item})

     /*Save in local*/
     _saveLocalData(updatedCryptos)

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
