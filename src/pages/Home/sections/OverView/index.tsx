import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { SlideImg1, SlideImg2, SlideImg3 } from "@/assets/images";

interface SlideData {
  text: string;
  img: string;
}

function OverView() {
  const swiperRef = useRef<any | null>(null);

const handlePaghinationButton=(index:number)=>{
    swiperRef.current.swiper.slideTo(index)
}

  const slideData: SlideData[] = [
    {
      text: "App Integration",
      img: SlideImg1,
    },
    {
      text: "App Customization",
      img: SlideImg2,
    },
    {
      text: "App Modification",
      img: SlideImg3,
    },
  ];

  return (
    <div
      id="overview"
      className="overview-area relative relative default-padding carousel-shadow"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h2>Quick Software Overview</h2>
              <div className="devider" />
              <p>
                Outlived no dwelling denoting in peculiar as he believed.
                Behaviour excellent middleton be as it curiosity departure
                ourselves very extreme future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-full">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              {/* Swiper */}
              <Swiper
                ref={swiperRef}
                breakpoints={{
                    1025:{
                        slidesPerView:2
                    },
                    1024:{
                        slidesPerView:1
                    },
                }}
                // centeredSlides={true}
                spaceBetween={20}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ padding: 0 }}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide className="" key={index}>
                    <div className="item p-0 m-0">
                      <div className="thumb">
                        <img src={slide.img} alt="Thumb" />
                        <a
                          href=""
                          className="item popup-gallery theme video-play-button"
                        >
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                      <div className="content">
                        <h4>
                          <span>0{index+1}</span> {slide.text}
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper */}
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;

// <div className="item">
//                 <div className="thumb">
//                   <img src="assets/img/dashboard/22.jpg" alt="Thumb" />
//                   <a
//                     href="assets/img/dashboard/22.jpg"
//                     className="item popup-gallery theme video-play-button"
//                   >
//                     <i className="fa fa-plus" />
//                   </a>
//                 </div>
//                 <div className="content">
//                   <h4>
//                     <span>01</span> App Integration
//                   </h4>
//                 </div>
//               </div>
//               <div className="item">
//                 <div className="thumb">
//                   <img src="assets/img/dashboard/33.jpg" alt="Thumb" />
//                   <a
//                     href="assets/img/dashboard/33.jpg"
//                     className="item popup-gallery theme video-play-button"
//                   >
//                     <i className="fa fa-plus" />
//                   </a>
//                 </div>
//                 <div className="content">
//                   <h4>
//                     <span>02</span> App Customization
//                   </h4>
//                 </div>
//               </div>
//               <div className="item">
//                 <div className="thumb">
//                   <img src="assets/img/dashboard/11.jpg" alt="Thumb" />
//                   <a
//                     href="assets/img/dashboard/11.jpg"
//                     className="item popup-gallery theme video-play-button"
//                   >
//                     <i className="fa fa-plus" />
//                   </a>
//                 </div>
//                 <div className="content">
//                   <h4>
//                     <span>03</span> App Modification
//                   </h4>
//                 </div>
//               </div>
