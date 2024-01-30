import { createStore } from "redux";
import { persistStore } from 'redux-persist'
import persistedReducer from "./reducers/redux-persist-config.js";

export default () => {
    const store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {store,persistor}
}