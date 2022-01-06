import {call, put, select, takeEvery} from "@redux-saga/core/effects";
import {SagaIterator} from "redux-saga";
import {setRepos, setUser} from "../actions";
import {getUserSearchTerm} from "../selectors";
import {RepoType, UserType} from "../types";
import {getRepos, getUser} from "../../api/api";

export function * watchFetchUserSaga(): Generator {
    yield takeEvery('FETCH_USER_REQUEST', fetchUserSaga)
}
export function * fetchUserSaga(): SagaIterator {
    try {
        const userSearchTerm: string = yield select(getUserSearchTerm)
        const user: UserType = yield call(getUser, userSearchTerm)
        yield put(setUser(user))
    } catch (e: any) {
        console.log(e.message)
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
    } catch (e: any) {
        console.log(e.message)
    }
}
