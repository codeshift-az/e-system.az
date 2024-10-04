import { useEffect, useRef, useState } from "react";

import { ChooseUsBackground } from "@/assets/images";

const ChooseUs = () => {
  const [width, setWidth] = useState<number>(0);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const isInViewport = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (progressBarRef.current && isInViewport(progressBarRef.current)) {
        setWidth(Number(progressBarRef.current.getAttribute("data-width")));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="choose-us-area default-padding bg-gray">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6 thumb">
            <img src={ChooseUsBackground} alt="dashboard" />
          </div>

          <div className="col-lg-6 info">
            <div className="item-box">
              <h4>Why Choose us</h4>
              <h2>
                Create your app page <br /> With expert developer
              </h2>
              <p>
                Journey greatly or garrets. Draw door kept do so come on open
                mean. Estimating stimulated how reasonably precaution diminution
                she simplicity sir but. Questions am sincerity zealously
                concluded consisted or no gentleman it.
              </p>
              <ul>
                <li>
                  <i className="fas fa-layer-group"></i>
                  <h5>Friendly Interface</h5>
                </li>

                <li>
                  <i className="fas fa-fingerprint"></i>
                  <h5>Strong Encryption</h5>
                </li>
              </ul>

              <div className="progress-box">
                <h5>Success Rate</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-width="78"
                    ref={progressBarRef}
                    style={{
                      width: `${width}%`,
                      opacity: width ? 1 : 0,
                      transition: "width 0.8s linear, opacity 0.8s",
                    }}>
                    <span>{width}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
