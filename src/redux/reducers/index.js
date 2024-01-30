import { combineReducers } from "redux";
import formReducer from "./formReducer.js";
import jsonSizeReducer from "./jsonSizeReducer.js";
import loginReducer from "./loginReducer.js";

const rootReducer = combineReducers({
    formReducer,
    jsonSizeReducer,
    loginReducer
})
export default rootReducer;