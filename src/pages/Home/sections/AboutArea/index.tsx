import { Link } from "react-router-dom";

// Assets
import { AboutAreaImg, AboutAreaImg2, AboutShape } from "@/assets/images";

function AboutArea() {
  return (
    <div className="about-area bg-gray default-padding">
      <div className="fixed-shape-left">
        <img src={AboutShape} alt="Shape" />
      </div>

      <div className="container">
        <div className="about-items">
          <div className="row align-center">
            <div className="col-lg-6">
              <div className="thumb">
                <img
                  className="wow fadeInLeft"
                  src={AboutAreaImg}
                  alt="Thumb"
                />
                <img
                  className="wow fadeInUp"
                  src={AboutAreaImg2}
                  alt="Thumb"
                />
              </div>
            </div>

            <div className="col-lg-6 info wow fadeInRight">
              <h4>Story about us</h4>
              <h2>Perfect place to Design, Development, Software.</h2>
              <ul>
                <li>
                  <h5>Free Download App</h5>
                  <p>
                    Fruit defer in party me built under first. Forbade him but
                    savings sending ham general. So play do in near park that
                    pain.
                  </p>
                </li>

                <li>
                  <h5>Trusted and Reliable</h5>
                  <p>
                    Fruit defer in party me built under first. Forbade him but
                    savings sending ham general. So play do in near park that
                    pain.
                  </p>
                </li>
              </ul>
              <div className="button">
                <Link className="btn circle btn-theme-effect btn-sm" to="/">
                  Start free trial
                </Link>
                <Link to="/">See all features</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArea;
