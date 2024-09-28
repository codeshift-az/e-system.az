import Counter from "./Counter";

function FunFactorArea() {
  return (
    <div className="fun-factor-area relative text-light">
      <div className="half-bg-top-gray"></div>
      <div className="container">
        <div className="fun-fact-items text-center">
          <div className="row">
            <div className="col-lg-3 col-md-6 item">
              <div className="fun-fact">
                <Counter className="timer" from={0} to={687} speed={5000} />
                <span className="medium">Projects Completed</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="fun-fact">
                <Counter className="timer" from={0} to={655} speed={5000} />
                <span className="medium">Active clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="fun-fact">
                <Counter className="timer" from={0} to={450} speed={5000} />
                <span className="medium">Cups of coffee</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="fun-fact">
                <Counter className="timer" from={0} to={1200} speed={5000} />
                <span className="medium">Happy clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunFactorArea;
