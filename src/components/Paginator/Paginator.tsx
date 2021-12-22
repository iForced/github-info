import React, {FC, MouseEvent, useState} from 'react';
import s from './Paginator.module.css'
import {useDispatch} from "react-redux";

type PropsType = {
    totalItems: number
    itemsPerPage: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
}

const Paginator: FC<PropsType> = ({totalItems, itemsPerPage, currentPage, onPageChange}) => {

    const dispatch = useDispatch()

    const pagesCount: number = Math.ceil(totalItems / itemsPerPage)
    const pagesElements: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesElements.push(i)
    }

    const pagesPortionSize = 3

    const pagesPortionCount = Math.ceil(pagesCount / pagesPortionSize)
    const [pagesPortionNumber, setPagesPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (pagesPortionNumber - 1) * pagesPortionSize + 1
    const rightPortionPageNumber = pagesPortionNumber * pagesPortionSize

    const handlePageChange = (e: MouseEvent<HTMLSpanElement>) => {
        onPageChange(+e.currentTarget.innerText)
        dispatch({type: 'FETCH_REPOS_REQUEST'})
    }

    const handlePagesPortionChange = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.innerText === '<' && pagesPortionNumber > 1) {
            setPagesPortionNumber(prev => prev - 1)
        } else if (e.currentTarget.innerText === '>' && pagesPortionNumber < pagesPortionCount) {
            setPagesPortionNumber(prev => prev + 1)
        }
    }

    return (
        <div className={s.paginator}>
            <div className={s.total_count}>
                Total count: {pagesCount}
            </div>
            <div className={s.pages}>
                {pagesPortionNumber > 1 &&
                <button className={s.page_arrow} onClick={handlePagesPortionChange}>&lt;</button>}
                {
                    pagesElements
                        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                        .map(page =>
                        <span
                            key={page}
                            className={s.page_number + ' ' + (currentPage === page && s.active_page)}
                            onClick={handlePageChange}
                        >{page}
                        </span>)
                }
                {pagesPortionCount > pagesPortionNumber &&
                <button className={s.page_arrow} onClick={handlePagesPortionChange}>&gt;</button>}
            </div>
        </div>
    );
};

export default Paginator;