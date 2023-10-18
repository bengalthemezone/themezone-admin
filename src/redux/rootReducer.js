import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import serviceReducer from "./service/serviceReducer";
import workReducer from "./work/workReducer";
import tutorialReducer from "./tutorial/tutorialReducer";
import templateReducer from "./template/templateReducer";
import authReducer from './auth/authReducer';
import errorReducer from './error/errorReducer';
import postReducer from './post/postReducer';

export default combineReducers({
    user : userReducer,
    service : serviceReducer,
    work : workReducer,
    template : templateReducer,
    tutorial : tutorialReducer,
    error : errorReducer,
    auth : authReducer,
    post: postReducer,
})