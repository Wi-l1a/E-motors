import React, { useEffect, useState } from 'react';
import styles from './Parts.module.css'
import { useSelector, useDispatch } from 'react-redux';
import dropDown from '../../assets/dropDown.png'
import 'animate.css'
import PartsCard from './PartsCard';
import ListFilter from './../CatalogPage/ListFilter/index';
import { getPartsByName, setPartsCategoriesId, setPartsLiName, setPartsName, setPartsStock } from '../../redux/motorsSlice';
import { getProductsParts } from './../../redux/motorsSlice';
import Loader from '../../Components/Loader';
import arrow_catalog from './../../assets/arrow_catalog.png'

import { Helmet } from 'react-helmet-async';


const PartsPage = () => {
    const { partsName, partsLiName, partsCategories, productParts, partsStock, partsCategoriesId, isLoading } = useSelector(state => state?.motors)
    const [showDropDawn, setShowDropDawn] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsParts({ partsStock, partsCategoriesId }))
    }, [partsCategoriesId, partsStock, dispatch])

    const showActivePartsLi = (category, name, inStock) => {
        dispatch(setPartsLiName(name))
        dispatch(setPartsName(category.name))
        dispatch(setPartsCategoriesId({ id: category.id }))
        dispatch(setPartsStock({ inStock }))
    }

    const search = (e) => {
        const name = e.target.value
        if (name.length > 2) {
            dispatch(getPartsByName(name))
        } else if (name.length === 0) {
            dispatch(getProductsParts({ partsStock, partsCategoriesId }))
        }
    }

    return (
        <>
            <Helmet>
                <title>Дополнительно | Emotors.kg</title>
            </Helmet>
            <div className={styles.parts_wrapper}>
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
                                        partsCategories &&
                                        partsCategories.map(c => (
                                            <div key={c.id}>
                                                <div onClick={() => showActivePartsLi(c, 'all', '')} className={styles.dropDown}>
                                                    <h4>{c.name}</h4>
                                                    <img className={partsName === c.name ? styles.arrow : null} src={dropDown} alt="drop-down" />
                                                </div>
                                                {
                                                    partsName === c.name ?
                                                        <ListFilter showActiveLi={showActivePartsLi} categoryName={partsName} liNameCategory={partsLiName} category={c} />
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
                                    productParts.length > 0 ?
                                        productParts?.map(e => (
                                            <PartsCard key={e.id} item={e} />
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


export default PartsPage;