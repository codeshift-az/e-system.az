import { SubscribeBackground } from "@/assets/images";

const Subscribe = () => {
  return (
    <div className="subscribe-area text-center text-light relative">
      <div className="half-bg-top-gray"></div>
      <div className="container">
        <div className="subscribe-items">
          <i className="flaticon-email"></i>
          <div className="fixed-shape-bottom">
            <img src={SubscribeBackground} alt="Shape" />
          </div>

          <div className="row align-center">
            <div className="col-lg-8 offset-lg-2">
              <h2>Signup for a trial</h2>
              <p>
                Create your free account now and get 30 days free trial <br />{" "}
                No credit card required
              </p>
              <form action="#">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control"
                  name="email"
                />
                <button type="submit"> Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
