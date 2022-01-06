import React from 'react';
import {NextPage} from "next";
import {wrapper} from "../../src/redux/store";
import {RepoType} from "../../src/redux/types";
import RepoItem from "../../src/components/RepoItem/RepoItem";
import {getRepos} from "../../src/api/api";
import {fetchReposRequest} from "../../src/redux/actions";

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

export const getServerSideProps = wrapper.getServerSideProps<PropsType>((store) =>
    async (context) => {
        // not working
        // store.dispatch(fetchReposRequest())
        // const repos = store.getState().userRepoReducer.repos
        const userName = context.params?.userName
        const repos = await getRepos(userName)
        return {props: {repos: repos}}
    }
)

export default RepoPage;