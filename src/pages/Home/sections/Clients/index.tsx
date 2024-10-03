//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
//Swiper

// images
import { 
    PartnerLogo1, 
    PartnerLogo2, 
    PartnerLogo3, 
    PartnerLogo4, 
    PartnerLogo5, 
    
} from "@/assets/images";
// images


const partnerLogos:string[]=[PartnerLogo1, PartnerLogo2, PartnerLogo3, PartnerLogo4, PartnerLogo5]

function Clients() {
  return (
    <div className="clients-style-one-area default-padding text-center">
      <div className="container">
        <div className="clients-style-one-box">
          <div className="row">
            <div className="col-lg-12">
              <h3>
                Over <strong>150,000+</strong> client all over the world
              </h3>
              <div className="">
              <Swiper
                    breakpoints={{
                        1024:{
                            slidesPerView:5
                        },
                        768:{
                            slidesPerView:3
                        },
                        320:{
                            slidesPerView:2
                        }
                    }}
                    autoplay={{
                        delay:3000
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {
                        partnerLogos.map((logo, index)=>(
                            <SwiperSlide className='p-sm-4 p-2' key={index}>
                                <img src={logo}  className='' alt={`Partner${index+1}`} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
