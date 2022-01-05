import {call, put, select, takeEvery} from "@redux-saga/core/effects";
import {SagaIterator} from "redux-saga";
import {fetchReposRequest, setRepos, setUser} from "../actions";
import {getUserSearchTerm} from "../selectors";
import {RepoType, UserType} from "../types";

export const getUser = (userName: string) => {
    return fetch(`https://api.github.com/users/${userName}`).then(res => res.json())
}
export const getRepos = (userName: string | string[] | undefined) => {
    return fetch(`https://api.github.com/users/${userName}/repos`).then(res => res.json())
}

export function * watchFetchUserSaga(): Generator {
    yield takeEvery('FETCH_USER_REQUEST', fetchUserSaga)
}
export function * fetchUserSaga(): SagaIterator {
    try {
        const userSearchTerm: string = yield select(getUserSearchTerm)
        const user: UserType = yield call(getUser, userSearchTerm)
        yield put(setUser(user))
    } catch (e) {
        console.log(e)
    }
}

export function * watchFetchReposSaga(): Generator {
    yield takeEvery('FETCH_REPOS_REQUEST', fetchReposSaga)
}
export function * fetchReposSaga(): SagaIterator {
    try {
        const userSearchTerm: string = yield select(getUserSearchTerm)
        const repos: Array<RepoType> = yield call(getRepos, userSearchTerm)
        yield put(setRepos(repos))
    } catch (e) {
        console.log(e)
    }
}
