import {all} from "@redux-saga/core/effects";
import {watchFetchReposSaga, watchFetchUserSaga} from "./sagas";

export function * rootSaga() {
    yield all([watchFetchUserSaga(), watchFetchReposSaga()])
}