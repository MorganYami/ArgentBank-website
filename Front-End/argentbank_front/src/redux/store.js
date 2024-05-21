import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducer'
import { thunk } from 'redux-thunk'

export const initialeState = {
  users: null,
  connected: false,
  status: 'void',
  user: {
    prenom: ' ',
    nom: ' ',
    userName: ' '
  },
  token: '',
  error: null
}


function saveToLocalStorage (state) {
    try {
      const serialisedState = JSON.stringify(state)
      localStorage.setItem('persistantState', serialisedState)
    } catch (error) {
      console.warn(error)
    }
  }
  
 
  function loadFromLocalStorage () {
    try {
      const serialisedState = localStorage.getItem('persistantState')
      if (serialisedState === null) return undefined
      return JSON.parse(serialisedState)
    } catch (error) {
      console.warn(error)
      return undefined
    }
  }

const store = createStore(rootReducer, loadFromLocalStorage(), applyMiddleware(thunk))

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store