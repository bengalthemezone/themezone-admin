import {GET_PROFILES, LOADING_DATA} from "./userTypes";
import axios from "axios";
import {URL} from "../utils";

export const getProfiles = () => dispatch => {
    dispatch(loadingData());
    axios
        .get(`${URL}api/profile/all`)
        .then(res => {
            dispatch({
                type : GET_PROFILES,
                payload : res.data
            })
        })
        .catch(err => {
            dispatch({
                type : GET_PROFILES,
                payload : {}
            })
        })

}
export const loadingData = () => {
    return {
        type: LOADING_DATA
    }
}