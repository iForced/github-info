import React, {FC} from 'react';
import s from './RepoItem.module.css'

type PropsType = {
    name: string
    description: string
    url: string
}

const RepoItem: FC<PropsType> = ({name, description, url}) => {
    return (
        <div className={s.repo_item}>
            <div className={s.repo_title}>
                <a href={url} target={'_blank'}>
                    {name}
                </a>
            </div>
            <div className={s.repo_descriptions}>
                {description || 'No description'}
            </div>
        </div>
    );
};

export default RepoItem;