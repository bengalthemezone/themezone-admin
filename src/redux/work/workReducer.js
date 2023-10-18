import {GET_WORK, LOADING_WORK} from "./workTypes";

const INITIAL_STATE = {
    work : {},
    loading : false
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case LOADING_WORK : 
            return {
                ...state,
                loading : true
            }
        case GET_WORK :
            return {
                ...state,
                loading : false,
                work : action.payload,        
            }
        default : 
            return state
    }
} 