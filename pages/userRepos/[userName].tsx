import React from 'react';
import {GetStaticProps, NextPage} from "next";
import {wrapper} from "../../src/redux/store";
import {fetchReposRequest, setRepos} from "../../src/redux/actions";
import {END} from "redux-saga";
import {getRepos} from "../../src/redux/sagas/sagas";
import {RepoType} from "../../src/redux/types";
import RepoItem from "../../src/components/RepoItem/RepoItem";

type PropsType = {
    repos: Array<RepoType>
}

const RepoPage: NextPage<PropsType> = ({repos}) => {
    return (
        <div>
            {repos.map(repo =>
                <RepoItem
                    key={repo.id}
                    id={repo.id}
                    name={repo.name}
                    description={repo.description}
                    url={repo.html_url}
                />)}
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async (context) => {
        const userName = context.query.userName
        const repos: Array<RepoType> = await getRepos(userName)
        store.dispatch(setRepos(repos))
        return {props: {repos}}
    }
)

export default RepoPage;