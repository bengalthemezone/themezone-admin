import {GET_POSTS, LOADING_POSTS} from "./postTypes";
import {GET_ERRORS} from "../error/errorTypes";
import axios from "axios"
import {URL} from "../utils";

export const getPosts = (state) => (dispatch) => {
    dispatch(loadPosts());
    axios
        .get(`${URL}api/post/`)
        .then (res => {
            dispatch({
                type : GET_POSTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type : GET_POSTS,
                payload : {}
            })
        })
}

export const postQuestion = (data, location) => dispatch => {
    axios
        .post(`${URL}api/post/`, data)
        .then((res)=> location.reload())
        .catch(err => {
            console.log(err);
            dispatch({
                type : GET_ERRORS,
                payload : err.response.data
            })
        })
}

export const postComment = (id,data,location) => dispatch => {
    axios
        .post(`${URL}api/post/comment/${id}`, data)
        .then((res)=> location.reload())
        .catch(err => {
            console.log(err)
            dispatch({
                type : GET_ERRORS,
                payload : err.response.data
            })
        })
}

export const likePost = (id, location) => dispatch => {
    axios
        .post(`${URL}api/post/like/${id}`)
        .then((res)=> location.reload())
        .catch(err => {
            dispatch({
                type : GET_ERRORS,
                payload : err.response.data
            })
        })
}
export const dislikePost = (id, location) => dispatch => {
    axios
        .post(`${URL}api/post/unlike/${id}`)
        .then((res)=> location.reload())
        .catch(err => {
            dispatch({
                type : GET_ERRORS,
                payload : err.response.data
            })
        })
}
export const activatePost = (id,location) => dispatch => {
    axios
        .post(`${URL}api/post/activate/${id}`)
        .then(res => location.reload())
        .catch(err => {
            dispatch({
                type : GET_ERRORS,
                payload : err.response.data
            })
        })
}
export const loadPosts = () => {
    return {
        type : LOADING_POSTS
    }
}