import { useTranslation } from "react-i18next";

//Swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Assets
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
  const { t } = useTranslation("pages", { keyPrefix: "home.clients" });

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
                {t("text1")} <strong>{t("textStrong")}</strong> 
                {t("text2")}
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
