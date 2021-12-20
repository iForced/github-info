import {RepoType} from "./types";

const baseURL = 'https://api.github.com'

export const getRepos = (userName: string): Promise<Array<RepoType>> => {
    return fetch(`${baseURL}/users/${userName}/repos`).then(response => response.json())
}