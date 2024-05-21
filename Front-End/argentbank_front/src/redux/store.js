import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const initialeState = {
  users: null,
  connected: false,
  status: 'void',
  user: {
    prenom: ' ',
    nom: ' ',
    username: ' '
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

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, loadFromLocalStorage(), composedEnhancer)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store