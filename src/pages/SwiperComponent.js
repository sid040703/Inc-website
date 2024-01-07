// import React from 'react';
// import { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import faculty from './facultyTeam';
// import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
// import './styles/SwiperComponent.css';

// import image1 from '../assets/images/ADVISORY.jpg'
// import image2 from '../assets/images/ADVISORY (1).jpg'
// import image3 from '../assets/images/ADVISORY (2).jpg'
// import image4 from '../assets/images/ADVISORY (3).jpg'
// import image5 from '../assets/images/ADVISORY (4).jpg'
// import image6 from '../assets/images/ADVISORY (5).jpg'
// import image7 from '../assets/images/ADVISORY (6).jpg'
// import image8 from '../assets/images/ADVISORY (7).jpg'
// import image9 from '../assets/images/ADVISORY (8).jpg'
// import image10 from '../assets/images/ADVISORY (9).jpg'
// import image11 from '../assets/images/ADVISORY (10).jpg'
// import image12 from '../assets/images/ADVISORY (11).jpg'
// import image13 from '../assets/images/ADVISORY (12).jpg'
// import image14 from '../assets/images/ADVISORY (13).jpg'
// import image15 from '../assets/images/ADVISORY (14).jpg'
// import image16 from '../assets/images/ADVISORY (15).jpg'
// import image17 from '../assets/images/ADVISORY (16).jpg'
// import image18 from '../assets/images/ADVISORY (17).jpg'
// import image19 from '../assets/images/ADVISORY (18).jpg'
// import image20 from '../assets/images/ADVISORY (19).jpg'
// import image21 from '../assets/images/ADVISORY (20).jpg'
// import image22 from '../assets/images/ADVISORY (21).jpg'
// import image23 from '../assets/images/ADVISORY (22).jpg'
// import image24 from '../assets/images/Your paragraph text (13).png'
// import image25 from '../assets/images/Your paragraph text (12).png'
// import image26 from '../assets/images/Your paragraph text (11).png'
// import image27 from '../assets/images/Your paragraph text (10).png'
// import image28 from '../assets/images/Your paragraph text (9).png'
// import image29 from '../assets/images/Your paragraph text (8).png'
// import image30 from '../assets/images/Your paragraph text (7).png'
// import image31 from '../assets/images/Your paragraph text (6).png'
// import image32 from '../assets/images/Your paragraph text (5).png'
// import image33 from '../assets/images/Your paragraph text (4).png'
// import image34 from '../assets/images/Your paragraph text (3).png'
// import image35 from '../assets/images/Your paragraph text (2).png'
// import image36 from '../assets/images/Your paragraph text (1).png'
// import image37 from '../assets/images/Your paragraph text (1).jpg'
// import image38 from '../assets/images/Your paragraph text.jpg'
// import { BrowserRouter } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';


// const SwiperComponent = () => {
//   return (

//     <Swiper
//       effect={'coverflow'}
//       grabCursor={false}
//       centeredSlides={true}
//       slidesPerView={'auto'}
//       coverflowEffect={{
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: false,
//       }}
//       autoplay={{ delay: 1500, disableOnInteraction: false }}
//       pagination={false}
//       modules={[EffectCoverflow, Pagination, Autoplay]}
//       className="mySwiper"
//     >
//       <SwiperSlide>
//         <img src={image1} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image2} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image3} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image4} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image5} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image6} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image7} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image8} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image9} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image10} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image11} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image12} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image13} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image14} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image15} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image16} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image17} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image18} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image19} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image20} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image21} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image22} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image23} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image24} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image25} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image26} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image27} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image28} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image29} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image30} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image31} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image32} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image33} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image34} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image35} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image36} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image37} alt='' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image38} alt='' />
//       </SwiperSlide>
//       {/* SwiperSlides go here */}
//     </Swiper>

//   );


// };

// export default SwiperComponent;
