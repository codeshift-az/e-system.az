import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  TestimonialsImg,
  TestimonialsImg2,
  TestimonialsImg3,
} from "@/assets/images";

const Testimonials = () => {
  const sliderSettings = {
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 30,
    freeMode: true,
    modules: [FreeMode, Pagination],
    className: "mySwiper",
  };

  const slides = [
    {
      name: "Prausuj Natasha",
      position: "Theme Developer",
      profileImg: TestimonialsImg,
      description:
        "Otherwise concealed favourite frankness on be at dashwoods mentions defective at. Sympathize interested simplicity at do projecting care effect increasing terminated. As edward settle limits at in. Chamber reaching abnormally nothing be accesing to the point. very extreme future.",
      reasonText: "Design Quality",
    },
    {
      name: "Devid Warner",
      position: "Managing Director",
      profileImg: TestimonialsImg2,
      description:
        "Otherwise concealed favourite frankness on be at dashwoods mentions defective at. Sympathize interested simplicity at do projecting care effect increasing terminated. As edward settle limits at in. Chamber reaching abnormally nothing be accesing to the point. very extreme future.",
      reasonText: "User Friendly",
    },
    {
      name: "Prausuj Natasha",
      position: "Theme Developer",
      profileImg: TestimonialsImg3,
      description:
        "Otherwise concealed favourite frankness on be at dashwoods mentions defective at. Sympathize interested simplicity at do projecting care effect increasing terminated. As edward settle limits at in. Chamber reaching abnormally nothing be accesing to the point. very extreme future.",
      reasonText: "Design Quality",
    },
  ];

  return (
    <div className="testimonials-area carousel-shadow default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h2>What people say</h2>
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
      <div className="container">
        <div className="testimonial-items">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-carousel">
                <Swiper {...sliderSettings}>
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="item">
                        <div className="provider">
                          <img src={slide.profileImg} alt="Author" />
                          <div className="content">
                            <h4>{slide.name}</h4>
                            <span>{slide.position}</span>
                          </div>
                        </div>

                        <div className="info">
                          <p>{slide.description}</p>
                        </div>

                        <div className="reason">
                          <h5>{slide.reasonText}</h5>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
