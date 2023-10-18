import {GET_TEMPLATES, LOADING_TEMPLATES} from "./templateTypes";
import axios from "axios";
import {URL} from "../utils";
import {GET_ERRORS} from "../error/errorTypes";

export const getTemplates = () => dispatch => {
    dispatch(loadingData());
    axios
        .get(`${URL}api/template/query`)
        .then(res => {
            dispatch({
                type : GET_TEMPLATES,
                payload : res.data
            })
        })
        .catch(err => {
            dispatch({
                type : GET_TEMPLATES,
                payload : {}
            })
        })

}
export const activateTemplate = (id,location) => dispatch => {
    axios
        .post(`${URL}api/template/activate/${id}`)
        .then(res => location.reload())
        .catch(err => {
            dispatch({
                type : GET_ERRORS,
                payload: err.response.data
            })
        })
}
export const loadingData = () => {
    return {
        type: LOADING_TEMPLATES
    }
}