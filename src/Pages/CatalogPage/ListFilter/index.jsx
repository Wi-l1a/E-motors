import React from 'react';
import styles from './ListFilter.module.css'
const ListFilter = ({ showActiveLi, categoryName, liNameCategory, category }) => {
    return (
        <div className={`${styles.subcategories} animate__animated animate__fadeInLeft`}>
            <li onClick={() => showActiveLi(category, 'all', '')} className={categoryName === category.name && liNameCategory === 'all' ? `${styles.active} ${styles.radio}` : styles.radio}>Все</li>
            <li onClick={() => showActiveLi(category, 'in_stock', true)} className={categoryName === category.name && liNameCategory === 'in_stock' ? `${styles.active} ${styles.radio}` : styles.radio}>В наличии</li>
            <li onClick={() => showActiveLi(category, 'on_order', false)} className={categoryName === category.name && liNameCategory === 'on_order' ? `${styles.active} ${styles.radio}` : styles.radio}>Под заказ</li>
        </div>
    );
};

export default ListFilter;