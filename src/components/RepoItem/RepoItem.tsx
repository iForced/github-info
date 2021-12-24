import Link from 'next/link';
import React, {FC} from 'react';
import s from './RepoItem.module.css'

type PropsType = {
    id: number
    name: string
    description: string
    url: string
}

const RepoItem: FC<PropsType> = ({name, description, url, id}) => {
    return (
        <div className={s.repo_item}>
            <div className={s.repo_title}>
                <a href={url} target={'_blank'}>
                    {name}
                </a>
            </div>
            <div className={s.repo_descriptions}>
                {description || 'No description'}
                <Link href={`/repodetails/${id}`}>
                    <a>Details</a>
                </Link>
            </div>
        </div>
    );
};

export default RepoItem;