import {GET_SERVICES, LOADING_SERVICES} from "./serviceTypes";

const INITIAL_STATE = {
    services : {},
    loading : false
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case LOADING_SERVICES : 
            return {
                ...state,
                loading : true
            }
        case GET_SERVICES :
            return {
                ...state,
                loading : false,
                services : action.payload,        
            }
        default : 
            return state
    }
} 