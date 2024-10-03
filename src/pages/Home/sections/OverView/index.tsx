import { useRef, useState } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// swiper
import { SlideImg1, SlideImg2, SlideImg3 } from "@/assets/images";
import { Link } from "react-router-dom";

interface SlideData {
  text: string;
  img: string;
}

function OverView() {
  const swiperRef = useRef<any | null>(null);
  const [currentSliderIndex, setCurrentSliderIndex] = useState<number>();

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

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
              <Swiper
                ref={swiperRef}
                onSwiper={(swiper) => setCurrentSliderIndex(swiper.activeIndex)}
                onSlideChange={(swiper) => setCurrentSliderIndex(swiper.activeIndex)}
                breakpoints={{
                  1025: {
                    slidesPerView: 1.5,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
                spaceBetween={20}
                loop
                modules={[Pagination]}
                className="mySwiper"
              >
              {
                slideData.map((slide, index) => (
                  <SwiperSlide className="" key={index}>
                    <div className="item p-0 m-0">
                      <div className="thumb">
                        <img src={slide.img} alt="Thumb" />
                        <Link
                          to=""
                          className="item popup-gallery theme video-play-button"
                        >
                          <i className="fa fa-plus" />
                        </Link>
                      </div>
                      <div className="content">
                        <h4>
                          <span>0{index + 1}</span> {slide.text}
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <div className="py-5 m-auto d-flex justify-content-center align-items-center">
                {slideData.map((d, index) => (
                  <div
                    className={`owl-dot ${
                      currentSliderIndex == index ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
