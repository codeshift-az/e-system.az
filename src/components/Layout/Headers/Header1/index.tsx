import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Logo, LogoLight } from "@/assets/images";

function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [subCategory, setSubCategory] = useState<boolean[]>([false, false]);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onMouse = (index: number) => {
    setSubCategory((prev) =>
      prev.map((item, i) => (index == i ? !item : item)),
    );
  };

  return (
    <header>
      <nav
        className={`navbar mobile-sidenav attr-border navbar-sticky navbar-default validnavs navbar-fixed white no-background${
          isScrolled ? "sticked " : ""
        }  navbar-responsive`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setNavbar(!navbar)}>
              <i className="fa fa-bars"></i>
            </button>
            <Link className="navbar-brand" to="/home">
              <img src={LogoLight} className="logo logo-display" alt="Logo" />
              <img src={Logo} className="logo logo-scrolled" alt="Logo" />
            </Link>
          </div>

          <div className="main-nav-content">
            <div
              className={`collapse navbar-collapse  ${
                navbar ? `collapse-mobile show` : ``
              } `}
              style={{ animationDuration: "0.3s " }}>
              <img src={Logo} alt="Logo" />
              <button
                type="button"
                className="navbar-toggle"
                onClick={() => setNavbar(!navbar)}>
                <i className="fa fa-times"></i>
              </button>

              <ul className="nav navbar-nav navbar-right">
                <li
                  className={`dropdown ${subCategory[0] ? "on" : ""}`}
                  onMouseEnter={() => onMouse(0)}
                  onMouseLeave={() => onMouse(0)}>
                  <Link to="#" className="dropdown-toggle active">
                    Home
                  </Link>
                  <ul
                    className={`dropdown-menu animated ${
                      subCategory[0] ? "fadeInDown" : ""
                    }`}
                    style={{ display: `${subCategory[0] ? "block" : "none"}` }}>
                    <li>
                      <Link to="/">App Landing</Link>
                    </li>
                    <li>
                      <Link to="/">Software Landing</Link>
                    </li>
                    <li>
                      <Link to="/">
                        Creative Agency <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        It Solutions <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">Startup Landing</Link>
                    </li>
                    <li>
                      <Link to="/">Saas Landing</Link>
                    </li>
                    <li>
                      <Link to="/">Data Science</Link>
                    </li>
                    <li
                      onMouseEnter={() => onMouse(1)}
                      onMouseLeave={() => onMouse(1)}
                      className={`dropdown ${subCategory[1] ? "on" : ""}`}>
                      <Link to="/" className="dropdown-toggle">
                        Onepage
                      </Link>
                      <ul
                        className={`dropdown-menu animated ${
                          subCategory[1] ? "fadeInDown" : "fadeOutUp"
                        }`}
                        style={{
                          display: `${subCategory[1] ? "block" : "none"}`,
                        }}>
                        <li>
                          <Link to="/">App Landing</Link>
                        </li>
                        <li>
                          <Link to="/">Software Landing</Link>
                        </li>
                        <li>
                          <Link to="/">Startup Landing</Link>
                        </li>
                        <li>
                          <Link to="/">Saas Landing</Link>
                        </li>
                        <li>
                          <Link to="/">Data Science</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link className="smooth-menu" to="/">
                    About
                  </Link>
                </li>

                <li>
                  <Link className="smooth-menu" to="/">
                    Features
                  </Link>
                </li>

                <li>
                  <Link className="smooth-menu" to="/">
                    Overview
                  </Link>
                </li>

                <li>
                  <Link className="smooth-menu" to="/">
                    Team
                  </Link>
                </li>

                <li>
                  <Link className="smooth-menu" to="/">
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link className="smooth-menu" to="/">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className={`overlay-screen ${navbar ? `opened` : ``}`}></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header1;
