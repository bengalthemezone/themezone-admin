import {GET_SERVICES, LOADING_SERVICES} from "./serviceTypes";
import axios from "axios";
import {URL} from "../utils";

export const getServices = () => dispatch => {
    dispatch(loadingData());
    axios
        .get(`${URL}api/service`)
        .then(res => {
            dispatch({
                type : GET_SERVICES,
                payload : res.data
            })
        })
        .catch(err => {
            dispatch({
                type : GET_SERVICES,
                payload : {}
            })
        })

}
export const loadingData = () => {
    return {
        type: LOADING_SERVICES
    }
}