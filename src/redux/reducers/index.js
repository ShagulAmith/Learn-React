import { combineReducers } from "redux";
import formReducer from "./formReducer.js";
import jsonSizeReducer from "./jsonSizeReducer.js";

export default combineReducers({
    formReducer,
    jsonSizeReducer
})