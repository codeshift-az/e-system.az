import { Link } from "react-router-dom";

import { LogoLight } from "@/assets/images";

import { CONTACT_DETAILS } from "@/constants";

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="f-items default-padding">
          <div className="row">
            <div className="col-lg-4 col-md-6 item">
              <div className="f-item about">
                <img src={LogoLight} alt="Logo" />
                <p>
                  Excellence decisively nay man yet impression for contrasted
                  remarkably. There spoke happy for you are out. Fertile how old
                  address did showing.
                </p>
                <form action="#">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                    name="email"
                  />
                  <button type="submit">
                    <i className="arrow_right"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 item">
              <div className="f-item link">
                <h4 className="widget-title">Quick Link</h4>
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Home
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> About us
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Company History
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Features
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Blog Page
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item link">
                <h4 className="widget-title">Community</h4>
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Career
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Leadership
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Strategy
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Services
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> History
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Components
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 item">
              <div className="f-item contact-widget">
                <h4 className="widget-title">Contact Info</h4>
                <div className="address">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fas fa-home"></i>
                      </div>
                      <div className="content">
                        <strong>Address:</strong>
                        {CONTACT_DETAILS.address}
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="content">
                        <strong>Email:</strong>
                        <a href={`mailto:${CONTACT_DETAILS.email}`}>
                          {CONTACT_DETAILS.email}
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="content">
                        <strong>Phone:</strong>
                        <a href={`tel:${CONTACT_DETAILS.phone}`}>
                          {CONTACT_DETAILS.phone}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>
                &copy; Copyright 2024. All Rights Reserved by
                <a href="https://www.codeshift.az">CodeShift</a>
              </p>
            </div>
            <div className="col-lg-6 text-end link">
              <ul>
                <li>
                  <Link to="#">Terms</Link>
                </li>
                <li>
                  <Link to="#">Privacy</Link>
                </li>
                <li>
                  <Link to="/contact">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
