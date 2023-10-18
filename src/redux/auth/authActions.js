import {
  REGISTRATION_SUCCESS,
  REGISTER_FAIL,
  USER_LOADING,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  SET_CURRENT_USER,
} from "./authTypes";
import { GET_ERRORS } from "../error/errorTypes";
import setAuthToken from "./utils/setAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {URL} from "../utils";

export const register = (newUser) => (dispatch) => {
  axios
    .post(`${URL}api/users/register`, newUser)
    .then((res) =>
      dispatch({
        type: REGISTRATION_SUCCESS,
        payload: res.data,
      })
    )
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      });
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// Login - Get User Token
export const login = (userData) => (dispatch) => {
  dispatch(loadingUser());
  axios
    .post(`${URL}api/users/login`, userData)
    .then((res) => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch({
        type: LOGIN_SUCCESS,
      });
    })
    .catch((err) =>{
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })

    }
    );
};

//loading user
export const loadingUser = () => {
  return {
    type: USER_LOADING,
  };
};
// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logout = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

/*
//Adding profile Picture
export const addProfilePic = (upload) => (dispatch, getState) => {
  axios
    .patch(
      "http://35.173.179.154:3000/user/profilePhoto",
      upload,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_PROFILE_PICTURE,
      });
      dispatch(loadUser());
    })
    .catch((err) => {
      dispatch(returnErrors(err.data, err.status, "FAILED_TO_UPLOAD"));
    });
};
/*
//Verify USER
export const verifyUser = (id) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${id}`,
    },
  };
  axios
    .post(`http://35.173.179.154:3000/auth/activeAccount/${id}`, config)
    .then((res) => {
      dispatch({
        type: VERIFY_USER,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.data, err.status, err.id));
    });
  */
