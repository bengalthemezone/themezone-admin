import {GET_POSTS, LOADING_POSTS} from "./postTypes";

const INITIAL_STATE = {
    posts : null,
    loading : false
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_POSTS:
          return {
            ...state,
            loading: false,
            posts : action.payload
          };
        case LOADING_POSTS :
            return {
                ...state,
                loading : true
            }
        default:
          return state;
      }
}