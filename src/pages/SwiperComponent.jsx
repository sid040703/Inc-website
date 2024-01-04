import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import './styles/SwiperComponent.css';


const SwiperComponent = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
        <SwiperSlide>
          <img src="https://www.bing.com/images/blob?bcid=qD6AT77NMH4GPozT4vsdQe6.ySqH.....x0" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.4z3uXoYdhdNrvVEuHiD5EgAAAA?rs=1&pid=ImgDetMain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.bing.com/images/blob?bcid=qD6AT77NMH4GPozT4vsdQe6.ySqH.....x0" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.4z3uXoYdhdNrvVEuHiD5EgAAAA?rs=1&pid=ImgDetMain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.bing.com/images/blob?bcid=qD6AT77NMH4GPozT4vsdQe6.ySqH.....x0" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.4z3uXoYdhdNrvVEuHiD5EgAAAA?rs=1&pid=ImgDetMain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.bing.com/images/blob?bcid=qD6AT77NMH4GPozT4vsdQe6.ySqH.....x0" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://th.bing.com/th/id/OIP.4z3uXoYdhdNrvVEuHiD5EgAAAA?
          rs=1&pid=ImgDetMain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.bing.com/images/blob?bcid=qD6AT77NMH4GPozT4vsdQe6.ySqH.....x0" />
        </SwiperSlide>

      {/* SwiperSlides go here */}
    </Swiper>
  );
};

export default SwiperComponent;
