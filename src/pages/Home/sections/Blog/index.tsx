import { Link } from "react-router-dom";

import { BlogImg, BlogImg2, BlogImg3 } from "@/assets/images";

function Blog() {
  return (
    <div className="blog-area default-padding bg-gray bottom-less">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h2>Latest News</h2>
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
        <div className="row">
          <div className="single-item col-lg-4 col-md-6">
            <div className="item">
              <div className="thumb">
                <Link to="/">
                  <img src={BlogImg} alt="Thumb" />
                </Link>
                <div className="date">
                  <strong>18</strong> <span>Apr</span>
                </div>
              </div>
              <div className="info">
                <div className="meta">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-user-circle"></i> User
                      </Link>
                    </li>

                    <li>
                      <Link to="#">
                        <i className="fas fa-comments"></i> 26 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link to="#">
                    Discovery earnestly public commanded mentions.
                  </Link>
                </h4>
                <p>
                  Possession ye no mr unaffected remarkably at. Wrote house in
                  never fruit up. Pasture imagine my garrets.
                </p>
              </div>
            </div>
          </div>

          <div className="single-item col-lg-4 col-md-6">
            <div className="item">
              <div className="thumb">
                <Link to="#">
                  <img src={BlogImg2} alt="Thumb" />
                </Link>
                <div className="date">
                  <strong>25</strong> <span>Aug</span>
                </div>
              </div>
              <div className="info">
                <div className="meta">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-user-circle"></i> Admin
                      </Link>
                    </li>

                    <li>
                      <Link to="#">
                        <i className="fas fa-comments"></i> 35 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link to="blog-single-with-sidebar.html">
                    Considered imprudence of he friendship boisterous.
                  </Link>
                </h4>
                <p>
                  Possession ye no mr unaffected remarkably at. Wrote house in
                  never fruit up. Pasture imagine my garrets.
                </p>
              </div>
            </div>
          </div>

          <div className="single-item col-lg-4 col-md-6">
            <div className="item">
              <div className="thumb">
                <Link to="#">
                  <img src={BlogImg3} alt="Thumb" />
                </Link>
                <div className="date">
                  <strong>05</strong> <span>Jul</span>
                </div>
              </div>
              <div className="info">
                <div className="meta">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-user-circle"></i> user
                      </Link>
                    </li>

                    <li>
                      <Link to="#">
                        <i className="fas fa-comments"></i> 12 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4>
                  <Link to="#">
                    Overcame breeding or my concerns removing desirous.
                  </Link>
                </h4>
                <p>
                  Possession ye no mr unaffected remarkably at. Wrote house in
                  never fruit up. Pasture imagine my garrets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
