import {AppStateType} from "./store";

export const getUserSearchTerm = (state: AppStateType) => state.userRepoReducer.userSearchTerm

export const getPageNumber = (state: AppStateType) => state.userRepoReducer.pageNumber

export const getReposPerPage = (state: AppStateType) => state.userRepoReducer.reposPerPage