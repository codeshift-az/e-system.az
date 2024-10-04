import { Link } from "react-router-dom";

import { FeaturesBackground1, FeaturesBackground2 } from "@/assets/images";

const Features = () => {
  return (
    <div className="our-features-area default-padding bottom-less">
      <div
        className="fixed-bg"
        style={{ backgroundImage: `url(${FeaturesBackground2})` }}></div>
      <div className="container">
        <div className="feature-items">
          <div className="row">
            <div className="single-item col-lg-4 col-md-6">
              <div
                className="item service-banner"
                style={{ backgroundImage: `url(${FeaturesBackground1})` }}>
                <h4>Our Features</h4>
                <h2>Work smarter with powerful features</h2>
                <a className="btn circle btn-theme-effect btn-sm" href="#">
                  View More
                </a>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-integration"></i>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">App Integration</a>
                  </h4>
                  <p>
                    Passage weather as up am exposed. And natural related man
                    subject eagerness it. concluded consisted or no gentleman.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-rgb-1"></i>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">Color Schemes</a>
                  </h4>
                  <p>
                    Passage weather as up am exposed. And natural related man
                    subject eagerness it. concluded consisted or no gentleman.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-resolution-1"></i>
                </div>
                <div className="info">
                  <h4>
                    <a href="#">High Resolution</a>
                  </h4>
                  <p>
                    Passage weather as up am exposed. And natural related man
                    subject eagerness it. concluded consisted or no gentleman.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-drag"></i>
                </div>
                <div className="info">
                  <h4>
                    <Link to="#">Drag And Drop</Link>
                  </h4>
                  <p>
                    Passage weather as up am exposed. And natural related man
                    subject eagerness it. concluded consisted or no gentleman.
                  </p>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="icon">
                  <i className="flaticon-showcase"></i>
                </div>
                <div className="info">
                  <h4>
                    <Link to="#">Perfect Showcase</Link>
                  </h4>
                  <p>
                    Passage weather as up am exposed. And natural related man
                    subject eagerness it. concluded consisted or no gentleman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
