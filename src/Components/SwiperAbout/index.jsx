import React from 'react';
import './SwiperAbout.css'
import 'swiper/css/bundle';
import { Pagination, A11y, Keyboard, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

const SwiperAbout = () => {
    const info = useSelector(state => state?.info?.info)
    return (
        <Swiper id='about-us' className='SwiperAbout'
            modules={[Pagination, A11y, Autoplay, Keyboard, EffectFade]}
            spaceBetween={100}
            slidesPerView={1}
            loop
            keyboard
            speed={1300}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}

            pagination={{ clickable: true }}
            effect='fade'
        >

            <SwiperSlide>
                <div className='slideAbout-Card'>
                    <div className="about_box-img">
                        <img src={`http://176.126.166.199:8000${info?.about_image}`} alt="honda" />
                    </div>
                    <div className="about_box-title">
                        <div className="about_center-box-title">
                            <h2>о нас</h2>
                            <p>{info?.text}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slideAbout-Card'>
                    <div className="about_box-img">
                        <img src={`http://176.126.166.199:8000${info?.about_image2}`} alt="teslaSwiperAbout" />
                    </div>
                    <div className="about_box-title">
                        <div className="about_center-box-title">
                            <h2>о нас</h2>
                            <p>{info?.text}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slideAbout-Card'>
                    <div className="about_box-img">
                        <img src={`http://176.126.166.199:8000${info?.about_image3}`} alt="teslaSwiperAbout" />
                    </div>
                    <div className="about_box-title">
                        <div className="about_center-box-title">
                            <h2>о нас</h2>
                            <p>{info?.text}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};


export default SwiperAbout;