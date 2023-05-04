import { useState } from 'react';
import './SwiperDetail.css'
import { FreeMode, Navigation, Thumbs, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const SwiperDetail = ({ image, imageList }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <LightGallery
            selector='.gallery_item'
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <Swiper
                modules={[Navigation, Thumbs, Keyboard]}
                style={{
                    "--swiper-navigation-color": "#FFCD00",
                    "--swiper-pagination-color": "#FFCD00",

                }}
                loop={true}
                spaceBetween={30}

                navigation={true}
                keyboard
                thumbs={{ swiper: thumbsSwiper }}
                className='SwiperDetail'
            >
                <SwiperSlide className='swiperCardDetail'>
                    <a data-src={image} className='gallery_item' href={image}>
                        <img className='swiperDetailImg' src={image} alt={"slidemotors"} />
                    </a>
                </SwiperSlide>
                {
                    imageList?.length > 0 &&
                    imageList?.map((img, i) => (
                        <SwiperSlide key={i} className='swiperCardDetail'>
                            <a data-src={img?.image} className='gallery_item' href={img?.image}>
                                <img src={img?.image} alt={"slidemotors"} />
                            </a>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                slidesPerView={imageList.length + 1 || 3}
                spaceBetween={10}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="SwiperDetail_mini"

            >
                <SwiperSlide className='SwiperCardDetail_mini' >
                    <img src={image} alt={"slidemotors"} />
                </SwiperSlide>
                {
                    imageList?.length > 0 &&
                    imageList?.map((img, i) => (
                        <SwiperSlide key={i} className='SwiperCardDetail_mini'>
                            <img src={img?.image} alt={"slidemotors"} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </LightGallery>
    );
};

export default SwiperDetail;