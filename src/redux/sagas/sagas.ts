import {call, put, select, takeEvery} from "@redux-saga/core/effects";
import {getUser} from "../../services/getUser";
import {setRepos, setUser} from "../actions";
import {getRepos} from "../../services/getRepos";
import {getPageNumber, getReposPerPage, getUserSearchTerm} from "../selectors";
import {SagaIterator} from "redux-saga";

export function * watchFetchUserSaga(): Generator {
    yield takeEvery('FETCH_USER_REQUEST', fetchUserSaga)
}
export function * fetchUserSaga(): SagaIterator {
    try {
        const userSearchTerm = yield select(getUserSearchTerm)
        const user = yield call(getUser, userSearchTerm)
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
        const userSearchTerm = yield select(getUserSearchTerm)
        const reposPerPage = yield select(getReposPerPage)
        const pageNumber = yield select(getPageNumber)
        const repos = yield call(getRepos, userSearchTerm, reposPerPage, pageNumber)
        yield put(setRepos(repos))
    } catch (e) {
        console.log(e)
    }
}
