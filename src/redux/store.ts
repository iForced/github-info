import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {userRepoReducer} from "./reducers/userRepoReducer";
import {rootSaga} from "./sagas/rootSaga";
import {Context, createWrapper} from "next-redux-wrapper";
import {Task} from "redux-saga";

const rootReducer = combineReducers({
    userRepoReducer,
})

export interface SagaStore extends Store {
    sagaTask?: Task;
}

export const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

// export type AppStateType = ReturnType<typeof makeStore>
export type AppStateType = ReturnType<typeof rootReducer>

export const wrapper = createWrapper<Store<AppStateType>>(makeStore, {debug: true});