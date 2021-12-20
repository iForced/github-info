import {call, CallEffect, put, PutEffect, takeEvery} from "@redux-saga/core/effects";
import {getUser} from "../../services/getUser";
import {ActionTypes, setUser} from "../actions";
import {UserType} from "../../services/types";

export function * watchFetchUserSaga(): Generator {
    yield takeEvery('FETCH_USER_REQUEST', fetchUserSaga)
}

export function * fetchUserSaga(): Generator<CallEffect<UserType> | PutEffect<ActionTypes>, void, UserType> {
    try {
        const user: UserType = yield call(getUser, 'iForced')
        yield put(setUser(user))
    } catch (e) {
        console.log(e)
    }
}