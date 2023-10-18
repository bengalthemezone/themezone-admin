import {GET_TUTORIALS, LOADING_TUTORIAL} from "./tutorialTypes";

const INITIAL_STATE = {
    tutorials : {},
    loading : false
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case LOADING_TUTORIAL : 
            return {
                ...state,
                loading : true
            }
        case GET_TUTORIALS :
            return {
                ...state,
                loading : false,
                tutorials : action.payload,        
            }
        default : 
            return state
    }
} 