import React from 'react';
import slider_img_1 from '../assets/slider img/slider_img_1.webp'
import slider_img_2 from '../assets/slider img/slider_img_2.webp'
import slider_img_4 from '../assets/slider img/slider_img_4.webp'

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import { Navigation, Pagination,Mousewheel,Keyboard, Autoplay } from 'swiper/modules';
const Productslider = () => {
  return (

    <Swiper 
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src={slider_img_1} alt="slider1" /></SwiperSlide>
        <SwiperSlide><img src={slider_img_2} alt="slider2" /></SwiperSlide>
        <SwiperSlide><img src={slider_img_4} alt="slider3" /></SwiperSlide>
        
        
      </Swiper>
  )
}

export default Productslider