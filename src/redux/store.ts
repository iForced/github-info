import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {userRepoReducer} from "./reducers/userRepoReducer";
import {rootSaga} from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    userRepoReducer,
})

// @ts-ignore
const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)

export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch