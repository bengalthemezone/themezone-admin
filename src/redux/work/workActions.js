import {GET_WORK, LOADING_WORK} from "./workTypes";
import axios from "axios";
import {URL} from "../utils";
import { GET_ERRORS } from "../error/errorTypes";

export const getWork = () => dispatch => {
    dispatch(loadingData());
    axios
        .get(`${URL}api/work/all`)
        .then(res => {
            dispatch({
                type : GET_WORK,
                payload : res.data
            })
        })
        .catch(err => {
            dispatch({
                type : GET_WORK,
                payload : {}
            })
        })

}
export const activateWork = (id,location) => dispatch => {
    axios
        .post(`${URL}api/work/activate/${id}`)
        .then(res => location.reload())
        .catch(err => {
            dispatch({
                type : GET_ERRORS,
                payload : err.response.data
            })
        })
}
export const loadingData = () => {
    return {
        type: LOADING_WORK
    }
}