import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  ClientLogo1,
  ClientLogo2,
  ClientLogo3,
  ClientLogo4,
  ClientLogo5,
} from "@/assets/images";

const clients = [
  ClientLogo1,
  ClientLogo2,
  ClientLogo3,
  ClientLogo4,
  ClientLogo5,
];

const Clients = () => {
  const sliderSettings = {
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 30,
    freeMode: true,
    modules: [FreeMode],
    className: "mySwiper",
  };

  return (
    <div className="clients-style-one-area default-padding text-center">
      <div className="container">
        <div className="clients-style-one-box">
          <div className="row">
            <div className="col-lg-12">
              <h3>
                Over <strong>150,000+</strong> client all over the world
              </h3>
              <div>
                <Swiper {...sliderSettings}>
                  {clients.map((logo, index) => (
                    <SwiperSlide className="p-sm-4 p-2" key={index}>
                      <img src={logo} alt={`Partner${index + 1}`} />
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

export default Clients;
