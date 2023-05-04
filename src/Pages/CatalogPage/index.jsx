import React from 'react';
import styles from './CatalogPage.module.css'
import dropDown from '../../assets/dropDown.png'
import 'animate.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import ListFilter from './ListFilter';
import { getProductsAuto, setCategoryId, setCategoryName, setLiName, setStock } from '../../redux/motorsSlice';
import Loader from '../../Components/Loader';
import arrow_catalog from './../../assets/arrow_catalog.png'
import 'animate.css';
import { getAutoByName } from './../../redux/motorsSlice';
import { Helmet } from 'react-helmet-async';

const CatalogPage = () => {
    const { categoryName, liName, categories, categoryId, productAuto, stock, isLoading } = useSelector(state => state?.motors)
    const dispatch = useDispatch()
    const [showDropDawn, setShowDropDawn] = useState(false)

    useEffect(() => {
        dispatch(getProductsAuto({ stock, categoryId }))
    }, [categoryId, stock, dispatch])

    const showActiveLi = (category, name, inStock) => {
        dispatch(setLiName(name))
        dispatch(setCategoryName(category.name))
        dispatch(setCategoryId({ id: category.id }))
        dispatch(setStock({ inStock }))
    }

    const search = (e) => {
        const name = e.target.value
        if (name.length > 2) {
            dispatch(getAutoByName(name))
        } else if (name.length === 0) {
            dispatch(getProductsAuto({ stock, categoryId }))
        }
    }

    return (
        <>
            <Helmet>
                <title>Каталог | Emotors.kg</title>
            </Helmet>
            <div className={styles.wrapper_catalog}>
                <div className={styles.container}>
                    <div className={styles.categories_block}>
                        <div className={styles.categories_block_filtr}>
                            <input onChange={search} type="text" placeholder='Поиск' className={styles.search} />
                            <div className={styles.dropDownShow} >
                                <div onClick={() => setShowDropDawn(!showDropDawn)} className={styles.catalogDropDown}>
                                    <h1>Каталог</h1>
                                    <img src={arrow_catalog} alt="arrow_catalog" className={showDropDawn ? styles.arrowRotate : ''} />
                                </div>
                                <div className={showDropDawn ? `${styles.categoryDropDownShow} animate__animated  ${window.screen.width <= 768 ? 'animate__fadeInLeft' : 'animate__fadeInLeft'}` : `${styles.dropDownNone} animate__animated `}>
                                    {
                                        categories &&
                                        categories?.map(c => (

                                            <div key={c.id}>
                                                <div onClick={() => showActiveLi(c, 'all', '')} className={styles.dropDown}>
                                                    <h4>{c.name}</h4>
                                                    <img className={categoryName === c.name ? styles.arrow : null} src={dropDown} alt="drop-down" />
                                                </div>
                                                {
                                                    categoryName === c.name ?
                                                        <ListFilter showActiveLi={showActiveLi} categoryName={categoryName} liNameCategory={liName} category={c} />
                                                        :
                                                        null
                                                }
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>

                        </div>

                        <div className={styles.cards}>
                            {

                                isLoading ?
                                    <div className={styles.loader}>
                                        <Loader />
                                    </div>

                                    :
                                    productAuto.length > 0 ?
                                        productAuto?.map(e => (
                                            <Card key={e.id} item={e} />

                                        ))

                                        :
                                        <h1 className={styles.empty}>Товаров нет!</h1>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatalogPage;