import { combineReducers } from "redux";
import user from "./UserReducer";

const reducers = {
    user
};

export default combineReducers(reducers);