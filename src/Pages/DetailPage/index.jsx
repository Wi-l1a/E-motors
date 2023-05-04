import React from 'react';
import { useEffect } from 'react';
import SwiperDetail from './SwiperDetail/index';
import Description from './Description/index';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProductAuto } from './../../redux/motorsSlice';
import Feature from '../../Components/Feature';
import styles from './DetailPage.module.css'
import Loader from './../../Components/Loader/index';
import { Helmet } from 'react-helmet-async';


const DetailPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { detailAuto, isLoading } = useSelector(state => state?.motors)
    const info = useSelector(state => state?.info?.info)


    useEffect(() => {
        dispatch(getDetailProductAuto(id))
        window.scrollTo(0, 0)
    }, [dispatch, id])
    return (
        <>
            <Helmet>
                <title>{`${detailAuto?.name}`} | Emotors.kg</title>
            </Helmet>
            <div className={styles.container}>
                {isLoading && <Loader />}
                <div className={styles.box_character}>
                    {
                        detailAuto &&
                        <>
                            <div className={styles.box_character_img}>
                                <SwiperDetail imageList={detailAuto?.images || []} image={detailAuto?.image} />
                            </div>
                            <div className={styles.box_character_title}>
                                <div className={styles.title_character}>
                                    <h2>{detailAuto?.name}</h2>
                                </div>
                                <div className={styles.title_character}>
                                    <h3 className={styles.feature}>Характеристики</h3>
                                    <Feature name={'Запас хода:'} description={detailAuto?.power_reserve} />
                                    <div className={styles.block_feature}>
                                        <p className={styles?.title}>Наличие:</p>
                                        <span className={styles.title_name}>{detailAuto?.in_stock ? 'В наличии' : 'Под заказ'}</span>
                                    </div>
                                    <Feature name={'Мощность электромотора кВт/ч:'} description={detailAuto?.torque} />
                                    <Feature name={'Емкость батареи кВт/ч:'} description={detailAuto?.battery_capacity} />
                                    <Feature name={'Макс. скорость км/ч:'} description={detailAuto?.max_speed} />
                                    <Feature name={'Тип кузова электромобиля:'} description={detailAuto?.type_body} />
                                    <Feature name={'Тип привода:'} description={detailAuto?.type_drive} />
                                    <Feature name={'Пробег:'} description={detailAuto?.mileage} />
                                    <Feature name={'Год выпуска:'} description={detailAuto?.year_issue} />
                                </div>
                                <div className={styles.price_block}>
                                    <p className={styles.price_text}>Цена:</p>
                                    <h2 className={styles.price}>{detailAuto?.price}</h2>
                                </div>
                                <div className={styles.title_character}>
                                    <a href={info?.whatsapp}>
                                        <button>заказать</button>
                                    </a>

                                </div>
                            </div>
                        </>
                    }
                </div>
                <Description description={detailAuto?.description} />
            </div>
        </>
    );
};

export default DetailPage;