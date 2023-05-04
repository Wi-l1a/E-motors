import React from 'react';
import styles from '../CatalogPage.module.css'
import 'animate.css';
import stock from '../../../assets/inStock.png'
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <Link to={window.screen.width <= 768 ? `/detail-motors/${item?.id}` : null} className={`${styles.card} animate__animated ${window.screen.width <= 992 ? 'animate__fadeInUp' : ' animate__fadeInRight '}`}  >
            <Link to={`/detail-motors/${item?.id}`}>
                <div className={styles.item_foto_block}>
                    <img className={styles.car_img} src={item?.image} alt="motors" />
                    {item?.in_stock ? <img title='В наличии' id={styles.stock} src={stock} alt='inStock' /> : null}
                </div>
            </Link>
            <h2>{item?.name}</h2>
            <div className={styles.info_block}>
                <p>Запас хода:</p>
                <span>{item?.power_reserve}</span>
            </div>
            <div className={styles.info_block}>
                <p>Емкость батареи:</p>
                <span>{item?.battery_capacity} кВт/ч</span>
            </div>
            <div className={styles.price_block}>
                <h3>{item?.price}</h3>
                <Link style={{ display: window.screen.width <= 768 ? 'none' : '' }} to={`/detail-motors/${item?.id}`}>Подробнее</Link>
            </div>
        </Link>
    );
};

export default Card;