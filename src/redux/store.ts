import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {userRepoReducer} from "./reducers/userRepoReducer";
import {rootSaga} from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    userRepoReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch