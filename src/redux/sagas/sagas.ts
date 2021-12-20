import {call, CallEffect, put, PutEffect, takeEvery} from "@redux-saga/core/effects";
import {getUser} from "../../services/getUser";
import {ActionTypes, setRepos, setUser} from "../actions";
import {RepoType, UserType} from "../../services/types";
import {getRepos} from "../../services/getRepos";

export function * watchFetchUserSaga(): Generator {
    yield takeEvery('FETCH_USER_REQUEST', fetchUserSaga)
}
export function * fetchUserSaga(): Generator<CallEffect<UserType> | PutEffect<ActionTypes>, void, UserType> {
    try {
        const user = yield call(getUser, 'iForced')
        yield put(setUser(user))
    } catch (e) {
        console.log(e)
    }
}

export function * watchFetchReposSaga(): Generator {
    yield takeEvery('FETCH_REPOS_REQUEST', fetchReposSaga)
}
export function * fetchReposSaga(): Generator<CallEffect<Array<RepoType>> | PutEffect<ActionTypes>, void, Array<RepoType>> {
    try {
        const repos = yield call(getRepos, 'iForced')
        yield put(setRepos(repos))
    } catch (e) {
        console.log(e)
    }
}
