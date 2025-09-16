import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row p-3 mb-5">
        <div className="mb-4 mt-3" id="supportWrapper">
          <h1 className="text-muted mb-3">Support Portal</h1>
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "10%",
              height: "70%",
              fontWeight: "bold",
              backgroundColor: "#2a86e9ff",
            }}
          >
            My Ticket
          </button>
        </div>
        <div className="row mb-4">
          <div className="position-relative">
            <i className="fas fa-search position-absolute top-50 start-10 translate-middle-y ms-3 text-muted "></i>
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Eg: How do I open my account, How do I activate F&O..." style={{height: "3.5em"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
