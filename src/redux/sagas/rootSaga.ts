import {spawn} from "@redux-saga/core/effects";
import {watchFetchUserSaga} from "./sagas";

export function * rootSaga() {
    yield spawn(watchFetchUserSaga)
}