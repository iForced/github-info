import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import Layout from "../../src/components/Layout/Layout";
import RepoDetails from "../../src/components/RepoDetails/RepoDetails";
import {RepoType} from "../../src/services/types";

type PropsType = {
    repo: RepoType
}

const Repo: NextPage<PropsType> = (props) => {

    return (
        <div>
            <Layout>
                <RepoDetails repo={props.repo} />
            </Layout>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const response = await fetch(`https://api.github.com/users/iForced/repos`)
    const userRepos: Array<RepoType> = await response.json()
    return {
        props: {
            repo: userRepos.find(r => r.id === Number(query.id))
        }
    }
}

export default Repo;