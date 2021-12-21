import {RepoType} from "./types";

const baseURL = 'https://api.github.com'

export const getRepos = (userName: string, reposPerPage: number, pageNumber: number): Promise<Array<RepoType>> => {
    return fetch(`${baseURL}/users/${userName}/repos?per_page=${reposPerPage}&page=${pageNumber}`)
        .then(response => response.json())
}