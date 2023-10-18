import {GET_TUTORIALS, LOADING_TUTORIAL} from "./tutorialTypes";
import axios from "axios";
import {URL} from "../utils";

export const getTutorials = () => dispatch => {
    dispatch(loadingData());
    axios
        .get(`${URL}api/tutorial`)
        .then(res => {
            dispatch({
                type : GET_TUTORIALS,
                payload : res.data
            })
        })
        .catch(err => {
            dispatch({
                type : GET_TUTORIALS,
                payload : {}
            })
        })

}
export const loadingData = () => {
    return {
        type: LOADING_TUTORIAL
    }
}