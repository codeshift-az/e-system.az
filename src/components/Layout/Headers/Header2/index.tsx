import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Logo } from "@/assets/images";

function Header2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [subCategory, setSubCategory] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
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
        className={`navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs ${
          isScrolled ? "sticked " : ""
        }`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setNavbar(!navbar)}>
              <i className="fa fa-bars"></i>
            </button>

            <Link className="navbar-brand" to="/">
              <img src={Logo} className="logo" alt="Logo" />
            </Link>
          </div>

          <div
            className={`collapse navbar-collapse  ${
              navbar ? `collapse-mobile show` : ``
            } `}>
            <img src={Logo} alt="Logo" />
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setNavbar(!navbar)}>
              <i className="fa fa-times"></i>
            </button>

            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp">
              <li
                className={`dropdown ${subCategory[0] ? "on" : ""}`}
                onMouseEnter={() => onMouse(0)}
                onMouseLeave={() => onMouse(0)}>
                <Link to="/" className="dropdown-toggle active">
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
                    onMouseEnter={() => onMouse(6)}
                    onMouseLeave={() => onMouse(6)}
                    className={`dropdown ${subCategory[6] ? "on" : ""}`}>
                    <Link to="/" className="dropdown-toggle">
                      Onepage
                    </Link>

                    <ul
                      className={`dropdown-menu animated ${
                        subCategory[6] ? "fadeInDown" : "fadeOutUp"
                      }`}
                      style={{
                        display: `${subCategory[6] ? "block" : "none"}`,
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

              <li
                className={`dropdown ${subCategory[1] ? "on" : ""}`}
                onMouseEnter={() => onMouse(1)}
                onMouseLeave={() => onMouse(1)}>
                <Link to="/" className="dropdown-toggle">
                  Pages
                </Link>

                <ul
                  className={`dropdown-menu animated ${
                    subCategory[1] ? "fadeInDown" : ""
                  }`}
                  style={{ display: `${subCategory[1] ? "block" : "none"}` }}>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li
                    onMouseEnter={() => onMouse(6)}
                    onMouseLeave={() => onMouse(6)}
                    className={`dropdown ${subCategory[6] ? "on" : ""}`}>
                    <Link to="/" className="dropdown-toggle">
                      Team Members
                    </Link>

                    <ul
                      className={`dropdown-menu animated ${
                        subCategory[6] ? "fadeInDown" : "fadeOutUp"
                      }`}
                      style={{
                        display: `${subCategory[6] ? "block" : "none"}`,
                      }}>
                      <li>
                        <Link to="/">Team Style One</Link>
                      </li>

                      <li>
                        <Link to="/">Team Style Two</Link>
                      </li>

                      <li>
                        <Link to="/">Team Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Error Page</Link>
                  </li>
                </ul>
              </li>

              <li
                className="dropdown"
                onMouseEnter={() => onMouse(2)}
                onMouseLeave={() => onMouse(2)}>
                <Link to="/" className="dropdown-toggle">
                  Projects
                </Link>

                <ul
                  className={`dropdown-menu animated ${
                    subCategory[2] ? "fadeInDown" : ""
                  }`}
                  style={{ display: `${subCategory[2] ? "block" : "none"}` }}>
                  <li
                    onMouseEnter={() => onMouse(6)}
                    onMouseLeave={() => onMouse(6)}
                    className={`dropdown ${subCategory[6] ? "on" : ""}`}>
                    <Link to="/" className="dropdown-toggle">
                      Grid Style
                    </Link>

                    <ul
                      className={`dropdown-menu animated ${
                        subCategory[6] ? "fadeInDown" : "fadeOutUp"
                      }`}
                      style={{
                        display: `${subCategory[6] ? "block" : "none"}`,
                      }}>
                      <li>
                        <Link to="/">Project Style One</Link>
                      </li>

                      <li>
                        <Link to="/">Project Style Two</Link>
                      </li>

                      <li>
                        <Link to="/">Project Style Three</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    onMouseEnter={() => onMouse(7)}
                    onMouseLeave={() => onMouse(7)}
                    className={`dropdown ${subCategory[7] ? "on" : ""}`}>
                    <Link to="/" className="dropdown-toggle">
                      Masonary Style
                    </Link>

                    <ul
                      className={`dropdown-menu animated ${
                        subCategory[7] ? "fadeInDown" : "fadeOutUp"
                      }`}
                      style={{
                        display: `${subCategory[7] ? "block" : "none"}`,
                      }}>
                      <li>
                        <Link to="/">Project Style One</Link>
                      </li>

                      <li>
                        <Link to="/">Project Style Two</Link>
                      </li>

                      <li>
                        <Link to="/">Project Style Three</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/">Project Details</Link>
                  </li>
                </ul>
              </li>

              <li
                className="dropdown"
                onMouseEnter={() => onMouse(3)}
                onMouseLeave={() => onMouse(3)}>
                <Link to="/" className="dropdown-toggle">
                  Services
                </Link>

                <ul
                  className={`dropdown-menu animated ${
                    subCategory[3] ? "fadeInDown" : ""
                  }`}
                  style={{ display: `${subCategory[3] ? "block" : "none"}` }}>
                  <li>
                    <Link to="/">Services</Link>
                  </li>

                  <li>
                    <Link to="/">Services Details</Link>
                  </li>
                </ul>
              </li>

              <li
                className="dropdown"
                onMouseEnter={() => onMouse(4)}
                onMouseLeave={() => onMouse(4)}>
                <Link to="#" className="dropdown-toggle">
                  Blog
                </Link>

                <ul
                  className={`dropdown-menu animated ${
                    subCategory[4] ? "fadeInDown" : ""
                  }`}
                  style={{ display: `${subCategory[4] ? "block" : "none"}` }}>
                  <li>
                    <Link to="/">Blog Standard</Link>
                  </li>

                  <li>
                    <Link to="/">Blog With Sidebar</Link>
                  </li>

                  <li>
                    <Link to="/">Blog Grid Two Colum</Link>
                  </li>

                  <li>
                    <Link to="/">Blog Grid Three Colum</Link>
                  </li>

                  <li>
                    <Link to="/">Blog Single</Link>
                  </li>

                  <li>
                    <Link to="/">Blog Single With Sidebar</Link>
                  </li>
                </ul>
              </li>

              <li
                className="dropdown"
                onMouseEnter={() => onMouse(5)}
                onMouseLeave={() => onMouse(5)}>
                <Link to="#" className="dropdown-toggle">
                  Shop
                </Link>

                <ul
                  className={`dropdown-menu animated ${
                    subCategory[5] ? "fadeInDown" : ""
                  }`}
                  style={{ display: `${subCategory[5] ? "block" : "none"}` }}>
                  <li>
                    <Link to="/">Shop Product</Link>
                  </li>

                  <li>
                    <Link to="/">Shop Single</Link>
                  </li>

                  <li>
                    <Link to="/">Shop Single Version Two</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="attr-right">
            <div className="attr-nav">
              <ul>
                <li className="button">
                  <Link to="#">Get Started</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`overlay-screen ${navbar ? `opened` : ``}`}></div>
      </nav>
    </header>
  );
}

export default Header2;
