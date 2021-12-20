import {spawn} from "@redux-saga/core/effects";
import {watchFetchReposSaga, watchFetchUserSaga} from "./sagas";

export function * rootSaga() {
    yield spawn(watchFetchUserSaga)
    yield spawn(watchFetchReposSaga)
}