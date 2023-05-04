import React from 'react';
import styles from '../Parts.module.css'
import stock from '../../../assets/inStock.png'
import { Link } from 'react-router-dom';

const PartsCard = ({ item }) => {
    return (
        <Link to={window.screen.width <= 768 ? `/detail-motors/${item?.id}` : null} className={`${styles.card} animate__animated ${window.screen.width <= 992 ? 'animate__fadeInUp' : ' animate__fadeInRight '}`}>
            <Link to={`/detail-parts/${item?.id}`}>
                <img className={styles.part_img} src={item?.image} alt="motors" />
                {item?.in_stock ? <img title='В наличии' id={styles.stock} src={stock} alt='inStock' /> : null}
            </Link>
            <h2>{item.name}</h2>
            <div className={styles.price_block}>
                <h3>{item?.price}</h3>
                <Link style={{ display: window.screen.width <= 768 ? 'none' : '' }} to={`/detail-parts/${item?.id}`}>Подробнее</Link>
            </div>
        </Link>
    );
};

export default PartsCard;