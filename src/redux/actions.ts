import {RepoType, UserType} from "../services/types";

export const setUser = (user: UserType) => {
    return {
        type: 'SET_USER',
        payload: {
            user,
        }
    } as const
}
export const setRepos = (repos: Array<RepoType>) => {
    return {
        type: 'SET_REPOS',
        payload: {
            repos,
        }
    } as const
}
export const setUserSearchTerm = (searchTerm: string) => {
    return {
        type: 'SET_USER_SEARCH_TERM',
        payload: {
            searchTerm,
        }
    } as const
}
export const setPage = (pageNumber: number) => {
    return {
        type: 'SET_PAGE',
        payload: {
            pageNumber,
        }
    } as const
}

export type ActionTypes =
    ReturnType<typeof setUser>
    | ReturnType<typeof setRepos>
    | ReturnType<typeof setUserSearchTerm>
    | ReturnType<typeof setPage>