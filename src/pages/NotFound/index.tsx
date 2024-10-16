// Assets
import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";

import { NotFoundBackground } from "@/assets/images";

function NotFound() {
  return (
    <Layout>
      <div className="wrapper">
        <div
          className="breadcrumb-area shadow dark bg-cover text-center text-light"
          style={{ backgroundImage: `url(${NotFoundBackground})` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h1>Error Page</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">
                      <i className="fas fa-home"></i> Home
                    </a>
                  </li>
                  <li>404</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="error-page-area text-center default-padding">
          <div className="container">
            <div className="row align-center">
              <div className="col-lg-8 offset-lg-2">
                <div className="error-box">
                  <h1>404</h1>
                  <h2>Oops! That page can’t be found.</h2>
                  <p>
                    The page you are looking for might have been removed had its
                    name changed or its temporarily unavailable.
                  </p>
                  <Link className="btn circle btn-theme-effect btn-md" to="/">
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
