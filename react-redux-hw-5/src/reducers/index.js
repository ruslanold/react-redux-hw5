import {GET_PHOTOS, LOGIN, LOGOUT} from "../actionTypes"

const initialState = {
  photos: [],
  user: null,
  auth: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {...state, auth: true, user: action.payload }
    }
      
    case LOGOUT: {
      return {...state, auth: false }
    }
      
    case GET_PHOTOS: {
      return {...state, photos: action.payload }
    }
    
    default:
      return state;
  }
}