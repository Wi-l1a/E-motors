import React from 'react';
import styles from './Catalog.module.css'
import moreCatalog from './../../assets/moreCatalog.png'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategoryId, setCategoryName, setStock } from '../../redux/motorsSlice';


const Catalog = () => {
    const [showCategories, setShowCategories] = useState(false)
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state?.motors)

    const setCategory = (c) => {
        dispatch(setCategoryName(c.name))
        dispatch(setCategoryId({ id: c.id }))
        dispatch(setStock({ inStock: '' }))
        window.scrollTo(0, 0)
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.Catalog_title}>каталог</h2>
            <div className={styles.Output_Catalog}>
                <div onClick={() => setShowCategories(true)} className={styles.card_categories}>
                    <div className={styles.item_card}>
                        <img src={moreCatalog} alt="moreCatalog" />
                    </div>
                    <p>Все категории</p>
                </div>
                {
                    showCategories &&
                    <>
                        {
                            categories?.map(c => (
                                <Link key={c.id} className={`${styles.card_categories} animate__flipInY animate__animated`} onClick={() => setCategory(c)} to={'/catalog'}>
                                    <div className={styles.item_card}>
                                        <img src={c.image} alt="carCatalog" />
                                    </div>
                                    <p>{c.name}</p>
                                </Link>

                            ))

                        }
                    </>

                }
            </div>
        </div>
    );
};

export default Catalog;