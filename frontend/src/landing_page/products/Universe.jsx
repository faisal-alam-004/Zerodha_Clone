import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center p-5">
        <h1 className="mt-5 fs-3 mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-5 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "70%" }}
          />
          <p className="mt-3 text-muted">
            <small>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </small>
          </p>
        </div>

        <div className="col-4 p-5 mt-5">
          <img
            style={{ width: "90%" }}
            src="media/images/sensibullLogo.svg"
            alt=""
          />
          <p className="mt-3 text-muted">
            <small>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest.
            </small>
          </p>
        </div>

        <div className="col-4 p-5 mt-5">
          <img
            style={{ width: "60%" }}
            src="media/images/goldenpiLogo.png"
            alt=""
          />
          <p className="mt-3 text-muted">
            <small>Bonds trading platform</small>
          </p>
        </div>

        <div className="col-4 p-5 mb-3">
          <img
            style={{ width: "60%" }}
            src="media/images/streakLogo.png"
            alt=""
          />
          <p className="mt-3 text-muted">
            <small>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </small>
          </p>
        </div>

        <div className="col-4 p-5">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="mt-3 text-muted">
            <small>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </small>
          </p>
        </div>

        <div className="col-4 p-5 ">
          <img
            style={{ width: "40%" }}
            src="media/images/dittoLogo.png"
            alt=""
          />
          <p className="mt-3 text-muted">
            <small>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </small>
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;