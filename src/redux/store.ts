import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {userRepoReducer} from "./reducers/userRepoReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    userRepoReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch