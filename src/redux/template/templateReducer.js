import {GET_TEMPLATES, LOADING_TEMPLATES} from "./templateTypes";

const INITIAL_STATE = {
    templates : {},
    loading : false
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case LOADING_TEMPLATES : 
            return {
                ...state,
                loading : true
            }
        case GET_TEMPLATES :
            return {
                ...state,
                loading : false,
                templates : action.payload,        
            }
        default : 
            return state
    }
} 