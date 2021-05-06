import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'

const initialState = {
  users: [],
  user: {}
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'USERS/FETCH_ALL_USERS':
      return { ...state, users: payload }
    case 'USERS/FETCH_USER_BY_ID':
      return { ...state, user: payload }
    case 'USERS/ADD_USER':
      return { ...state, users: [...state.users, payload] }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store