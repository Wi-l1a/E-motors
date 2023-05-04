import React from 'react';
import './SwiperTop.css'
import { Pagination, A11y, Keyboard, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { useSelector } from 'react-redux';


const SwiperTop = () => {
    const info = useSelector(state => state?.info?.info)
    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay, Keyboard, EffectFade]}
            spaceBetween={100}
            slidesPerView={1}
            loop
            keyboard
            speed={2000}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
            className='SwiperTop'
            pagination={{ clickable: true }}
            effect='fade'


        >
            {
                info?.images?.map((e, i) => (
                    <SwiperSlide key={i}>
                        <div className='slideCard'>
                            <img src={`http://176.126.166.199:8000${e.image}`} alt="honda" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>

    );
};

export default SwiperTop;