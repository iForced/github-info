import React, {FC} from 'react';
import {RepoType} from "../../services/types";

type PropsType = {
    repo: RepoType
}

const RepoDetails: FC<PropsType> = (props) => {

    return (
        <div>
            <h1>Repo details</h1>
            <strong>Repo full name - {props.repo.full_name}</strong>
            <p>Owner name - {props.repo.owner.login}</p>
            <a href={props.repo.owner.html_url}>Link - {props.repo.owner.html_url}</a>
        </div>
    );
};

export default RepoDetails;