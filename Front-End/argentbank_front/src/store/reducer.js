const initialState = {
  token: null,
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  id: '',
  isLogged: false,
};

export const login = (payload) => {
  return {
      type: 'LOGIN',
      payload,
  }
}

export const isLogged = (payload) => {
  return {
    type: 'IS_LOGGED',
    payload,
  }
}

export const editName = (payload) => {
  return {
      type: 'EDIT_NAME',
      payload,
  }
}

export const logout = () => {
  return {
      type: 'LOGOUT',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN':
          return { ...state, ...action.payload, isLogged: true }
      case 'IS_LOGGED':
          return { ...state, ...action.payload };
      case'EDIT_NAME':
          return { ...state, ...action.payload };
      case 'LOGOUT':
          return initialState
      default:
          return state
  }
}

export default reducer;