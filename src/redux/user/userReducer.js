import {GET_PROFILES, LOADING_DATA} from "./userTypes";

const INITIAL_STATE = {
    users : null,
    loading : false
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case LOADING_DATA : 
            return {
                ...state,
                loading : true
            }
        case GET_PROFILES :
            return {
                ...state,
                loading : false,
                users : action.payload,        
            }
        default : 
            return state
    }
} 