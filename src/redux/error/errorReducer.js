import { GET_ERRORS,CLEAR_ERRORS } from "./errorTypes";

const initialState = {
  error: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return { error: action.payload };
    case CLEAR_ERRORS :
      return {
        error : {}
      }
    default:
      return state;
  }
}
