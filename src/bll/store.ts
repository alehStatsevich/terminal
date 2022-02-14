import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {paymentReducer} from "./terminalReduser";
import {appReducer} from "./appReduser";

const rootReducer = combineReducers({
    payment: paymentReducer,
    app:appReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>;
