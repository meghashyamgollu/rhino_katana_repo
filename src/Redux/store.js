import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { messageReducer } from "./Message/reducer";


export const rootReducer = combineReducers({
    message : messageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));