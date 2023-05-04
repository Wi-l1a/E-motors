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

const SwiperDetailParts = ({ images, image }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <LightGallery
            selector={'.gallery_item'}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <Swiper
                modules={[FreeMode, Navigation, Thumbs, Keyboard]}
                style={{
                    "--swiper-navigation-color": "#FFCD00",
                    "--swiper-pagination-color": "#FFCD00",
                }}
                loop={true}
                navigation={true}
                keyboard
                thumbs={{ swiper: thumbsSwiper }}
                className='SwiperDetailParts'
            >
                <SwiperSlide className='swiperCardDetail'>
                    <a className='gallery_item' href={image}>
                        <img src={image} alt={'parts'} />
                    </a>
                </SwiperSlide>
                {
                    images?.length > 0 &&
                    images?.map((e, i) => (
                        <SwiperSlide key={i} className='swiperCardDetail'>
                            <a className='gallery_item' href={e?.image}>
                                <img src={e?.image} alt={'parts'} />
                            </a>
                        </SwiperSlide>
                    ))}




            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                slidesPerView={images?.length + 1 || 3}
                spaceBetween={10}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="SwiperDetailParts_mini"
            >
                <SwiperSlide className='SwiperCardDetail_mini' >
                    <img src={image} alt={'parts'} />
                </SwiperSlide>
                {
                    images?.length > 0 &&
                    images?.map((e, i) => (
                        <SwiperSlide key={i} className='SwiperCardDetail_mini' >
                            <img src={e?.image} alt={'parts'} />
                        </SwiperSlide>

                    ))}



            </Swiper>
        </LightGallery>
    );
};

export default SwiperDetailParts;