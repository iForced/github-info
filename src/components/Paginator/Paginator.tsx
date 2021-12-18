import React from 'react';
import s from './Paginator.module.css'

const Paginator = () => {
    return (
        <div className={s.paginator}>
            <div className={s.total_count}>
                Total count: 555
            </div>
            <div className={s.pages}>
                <span className={s.page_number}>1</span>
                <span className={s.page_number}>2</span>
                <span className={s.page_number}>3</span>
            </div>
        </div>
    );
};

export default Paginator;