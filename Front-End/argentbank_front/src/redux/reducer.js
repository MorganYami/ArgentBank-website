import { initialeState } from './store'


export function reducer (state, action) {
  if (state === undefined) {
    state = initialeState
  }
  switch (action.type) {
    case 'error' : return { ...state, status: 'error' }
    case 'loading' :
      return { ...state, status: 'loading' }
    case 'connexion' : {
      return { ...state, token: action.payload.body.token, status: 'connexion' }
    }
    case 'profile' : {
      return {
        ...state,
        connected: true,
        status: 'connecte',
        user: {
          ...state.user,
          prenom: action.payload.body.firstName,
          nom: action.payload.body.lastName,
          username: action.payload.body.userName
        }
      }
    }
    case 'updateUser' : {
      return {
        ...state,
        user: {
          ...state.user,
          prenom: action.payload.body.firstName,
          nom: action.payload.body.lastName,
          username: action.payload.body.userName
        }
      }
    }
    case 'deconnexion' : {
      return {
        ...state,
        connected: false,
        token: '',
        status: 'void',
        user: {
          ...state.user,
          prenom: '',
          nom: '',
          username: ' '
        }
      }
    }
    default:
  }
  return state
}