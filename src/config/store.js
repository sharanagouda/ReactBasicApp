import {applyMiddleware, createStore} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import {AsyncStorage} from "react-native";

import reducers from "./../reducers";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: [],
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {store, persistor};
}