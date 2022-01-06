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
    sagaTask?: Task
}

export const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware();
    // @ts-ignore
    const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store
};

export type AppStoreType = ReturnType<typeof makeStore>
export type AppStateType = ReturnType<AppStoreType['getState']>

export const wrapper = createWrapper<Store<AppStateType>>(makeStore)