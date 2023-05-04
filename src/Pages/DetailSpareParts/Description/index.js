import React from 'react';
import styles from './Description.module.css'


const DetailSpareParts = ({ description }) => {
    return (
        <div className={styles.wrapper_description}>
            <div className={styles.box_description}>
                <h2>Описание</h2>
            </div>
            <div className={styles.wrapper_text}>
                <p className='notranslate'>{description}</p>
            </div>
        </div>
    );
};

export default DetailSpareParts;