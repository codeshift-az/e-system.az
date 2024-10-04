import { Link } from "react-router-dom";

import { PricingBackground } from "@/assets/images";

function Pricing() {
  return (
    <div className="pricing-area bg-dark default-padding bottom-less">
      <div
        className="shape"
        style={{ backgroundImage: `url(${PricingBackground})` }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h2>Our Packages</h2>
              <div className="devider"></div>
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
        <div className="pricing-items">
          <div className="row">
            <div className="col-lg-4 col-md-6 single-item">
              <div className="pricing-item">
                <i className="fas fa-rocket"></i>
                <div className="pricing-header">
                  <h4>Free trial</h4>
                  <span>Save 25%</span>
                </div>
                <div className="price">
                  <h2>
                    <sup>$</sup>0 <sub>/ Monthly</sub>
                  </h2>
                </div>
                <Link className="btn circle btn-theme-effect btn-sm" to="#">
                  Purchase Plan
                </Link>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> Demo file
                  </li>

                  <li>
                    <i className="fas fa-check"></i> 10 GB Dedicated Hosting
                    free
                  </li>

                  <li>
                    <i className="fas fa-check"></i> Lifetime free Support
                  </li>

                  <li>
                    <i className="fas fa-check"></i> SEO Optimized
                  </li>

                  <li>
                    <i className="fas fa-times"></i> Live Support
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 single-item active pricing-style-two">
              <div className="pricing-item">
                <i className="fas fa-gem"></i>
                <div className="pricing-header">
                  <h4>Regular</h4>
                  <span>Save 35%</span>
                </div>
                <div className="price">
                  <h2>
                    <sup>$</sup>29 <sub>/ Monthly</sub>
                  </h2>
                </div>
                <Link className="btn circle btn-theme-effect btn-sm" to="#">
                  Purchase Plan
                </Link>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> Demo file
                  </li>

                  <li>
                    <i className="fas fa-check"></i> 10 GB Dedicated Hosting
                    free
                  </li>

                  <li>
                    <i className="fas fa-check"></i> Lifetime free Support
                  </li>

                  <li>
                    <i className="fas fa-check"></i> SEO Optimized
                  </li>

                  <li>
                    <i className="fas fa-times"></i> Live Support
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 single-item">
              <div className="pricing-item">
                <i className="fa fa-chart-pie"></i>
                <div className="pricing-header">
                  <h4>Extended</h4>
                  <span>Save 49%</span>
                </div>
                <div className="price">
                  <h2>
                    <sup>$</sup>59 <sub>/ Monthly</sub>
                  </h2>
                </div>
                <Link className="btn circle btn-theme-effect btn-sm" to="#">
                  Purchase Plan
                </Link>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> Demo file
                  </li>

                  <li>
                    <i className="fas fa-check"></i> 10 GB Dedicated Hosting
                    free
                  </li>

                  <li>
                    <i className="fas fa-check"></i> Lifetime free Support
                  </li>

                  <li>
                    <i className="fas fa-check"></i> SEO Optimized
                  </li>

                  <li>
                    <i className="fas fa-check"></i> Live Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
