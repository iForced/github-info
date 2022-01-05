import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import {AppStateType, wrapper} from "../../src/redux/store";
import {fetchReposRequest} from "../../src/redux/actions";
import {RepoType} from "../../src/redux/types";
import {getRepos} from "../../src/redux/sagas/sagas";
import {END} from "redux-saga";
import RepoPage from "./[userName]";
import RepoItem from "../../src/components/RepoItem/RepoItem";
import {useSelector} from "react-redux";

type PropsType = {
    repos: Array<RepoType>
}

const UserRepos: NextPage<PropsType> = (props) => {

    const repos = useSelector<AppStateType, Array<RepoType>>(state => state.userRepoReducer.repos)

    // debugger
    return (
        <div>
            {repos.map(r => <RepoItem id={r.id} name={r.name} description={r.description} url={r.html_url}/>)}
        </div>
    );
};

export default UserRepos;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
// @ts-ignore
        async (context) => {
        // const s = store.getState().userRepoReducer.userSearchTerm
        // const repos = await getRepos(s)
        // return {props: {repos}}
        store.dispatch(fetchReposRequest())
        store.dispatch(END)
        // @ts-ignore
        await store.sagaTask.toPromise()
    }
)