import { Link } from "react-router-dom";

// framer motion
import { motion} from "framer-motion"
import { MotionComponent } from "./components/AnimatedLink";

// Assets
import {
  BannerBackground,
  BannerBackground2,
  BannerBackground3,
} from "@/assets/images/index";

function Banner() {
  return (
    <div
      className="banner-area banner-style-three text-light text-default"
      style={{ backgroundImage: `url(${BannerBackground})` }}>
      <div
        className="shape-left"
        style={{ backgroundImage: `url(${BannerBackground2})` }}></div>
      <div className="container">
        <div className="double-items">
          <div className="row align-center">
            <div className="col-lg-6 info">
              <motion.h2
               initial={{opacity:0,x:100}}
               viewport={{once:true}}
               whileInView={{opacity:1, x:0}}
               transition={{duration:1.5}}
               className="wow fadeInRight" data-wow-defaul="300ms">
                We're building software<strong>to manage business</strong>
              </motion.h2>
              <motion.p
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{delay:1,duration:1.5}}
                viewport={{once:true}}
               className="wow fadeInLeft" data-wow-delay="500ms">
                Lasted hunted enough an up seeing in lively letter. Had judgment
                out opinions property the supplied.
              </motion.p>

              <MotionComponent 
              as={Link}
              to='/'
              className="btn btn-md circle btn-light effect wow fadeInUp"
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{delay:1.5,duration:1}}
              viewport={{once:true}}

              > 
                Get Started <i className="fas fa-angle-right"></i>
              </MotionComponent>
              {/* <Link
                className="btn btn-md circle btn-light effect wow fadeInUp"
                to="#">
                Get Started <i className="fas fa-angle-right"></i>
              </Link> */}
            </div>

            <div
              className="col-lg-6 thumb wow fadeInRight"
              data-wow-delay="900ms">
              <motion.img 
              initial={{opacity:0,x:100}}
              whileInView={{opacity:1, x:0}}
              transition={{delay:1.5,duration:1.5}}
              viewport={{once:true}}
              src={BannerBackground3} alt="Thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
