import React, { useEffect } from 'react';
import styles from './DetailPage.module.css'
import SwiperDetailParts from './SwiperDetail/index';
import DetailSpareParts from './Description/index';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProductParts } from '../../redux/motorsSlice';
import { Helmet } from 'react-helmet-async';
import Loader from './../../Components/Loader/index';


const DetailPageParts = () => {
    const { parts_id } = useParams()
    const { detailParts, isLoading } = useSelector(state => state?.motors)
    const info = useSelector(state => state?.info?.info)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetailProductParts(parts_id))
        window.scrollTo(0, 0)
    }, [dispatch, parts_id])

    return (
        <>
            <Helmet>
                <title>{`${detailParts?.name}`} | Emotors.kg</title>
            </Helmet>
            <div className={styles.container}>
                {isLoading && <Loader />}
                <div className={styles.box_character}>
                    {
                        detailParts &&
                        <>
                            <div className={styles.box_character_img}>
                                <SwiperDetailParts images={detailParts?.images || []} image={detailParts?.image} />
                            </div>
                            <div className={styles.box_character_title}>
                                <div className={styles.title_character}>
                                    <h2>{detailParts?.name}</h2>
                                </div>
                                <div className={styles.price_block}>
                                    <p className={styles.price_text}>Цена:</p>
                                    <h2 className={styles.price}>{detailParts?.price}</h2>
                                </div>
                                <div className={styles.title_character}>
                                    <a href={info.whatsapp}>
                                        <button>заказать</button>
                                    </a>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <DetailSpareParts description={detailParts?.description} />
            </div>
        </>
    );
};

export default DetailPageParts;