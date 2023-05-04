import React from 'react';
import { Helmet } from 'react-helmet-async';
import Catalog from '../../Components/Catalog';
import SwiperAbout from '../../Components/SwiperAbout';
import SwiperTop from '../../Components/SwiperTop';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Главная | Emotors.kg</title>
            </Helmet>
            <main>
                <SwiperTop />
                <Catalog />
                <h1 className='company_name'>Emotors.kg</h1>
                <SwiperAbout />
            </main>
        </>
    );
};

export default Home;