import {CLEAR_ERRORS} from "./errorTypes";

export const clearErrors = () => {
    return {
        type : CLEAR_ERRORS
    }
}