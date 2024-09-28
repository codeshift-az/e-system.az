import { Link } from "react-router-dom";

// Assets
import {
  TeamAreaBackground,
  TeamAreaImg,
  TeamAreaImg2,
  TeamAreaImg3,
} from "@/assets/images";

function TeamArea() {
  return (
    <div className="team-area bg-gray default-padding bottom-less">
      <div
        className="fixed-shape"
        style={{ backgroundImage: `url(${TeamAreaBackground})` }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h2>Innovative Team</h2>
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
        <div className="team-items">
          <div className="row">
            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="thumb">
                  <img src={TeamAreaImg} alt="Thumb" />
                  <div className="social">
                    <input
                      type="checkbox"
                      id="toggle"
                      className="share-toggle"
                      hidden
                    />
                    <label htmlFor="toggle" className="share-button">
                      <i className="fas fa-plus"></i>
                    </label>
                    <a href="#" className="share-icon facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="share-icon twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="share-icon instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h4>
                    <a href="team-details.html">Ahem Natasha</a>
                  </h4>
                  <span>Operations officer</span>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="thumb">
                  <img src={TeamAreaImg2} alt="Thumb" />
                  <div className="social">
                    <input
                      type="checkbox"
                      id="toggle2"
                      className="share-toggle"
                      hidden
                    />
                    <label htmlFor="toggle2" className="share-button">
                      <i className="fas fa-plus"></i>
                    </label>
                    <Link to="#" className="share-icon facebook">
                      <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link to="#" className="share-icon twitter">
                      <i className="fab fa-twitter"></i>
                    </Link>

                    <Link to="#" className="share-icon instagram">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
                <div className="info">
                  <h4>
                    <Link to="#">Devid mark</Link>
                  </h4>
                  <span>Graphic designer</span>
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="thumb">
                  <img src={TeamAreaImg3} alt="Thumb" />
                  <div className="social">
                    <input
                      type="checkbox"
                      id="toggle3"
                      className="share-toggle"
                      hidden
                    />
                    <label htmlFor="toggle3" className="share-button">
                      <i className="fas fa-plus"></i>
                    </label>

                    <Link to="#" className="share-icon facebook">
                      <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link to="#" className="share-icon twitter">
                      <i className="fab fa-twitter"></i>
                    </Link>

                    <Link to="#" className="share-icon instagram">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
                <div className="info">
                  <h4>
                    <Link to="#">Brave Hammam</Link>
                  </h4>
                  <span>Web developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamArea;
