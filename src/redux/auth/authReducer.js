import {
  LOGOUT_USER,
  REGISTRATION_SUCCESS,
  SET_CURRENT_USER,
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./authTypes";

const INITIAL_STATE = {
  isAuthenticated: false,
  loadingUser: false,
  registration: false,
  user: {},
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    }
    case USER_LOADING: {
      return {
        ...state,
        loadingUser: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loadingUser: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}
