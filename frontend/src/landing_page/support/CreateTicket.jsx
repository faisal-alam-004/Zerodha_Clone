import React from "react";

function CreateTicket() {
  return (
    <div className="row">
      <div className="row mb-5">
        <div className="col-8">
          <div className="accordion" id="supportAccordion">
            {/* Account Opening */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <i className="fas fa-plus-circle me-2"></i> Account Opening
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  Content for Account Opening goes here...
                </div>
              </div>
            </div>

            {/* Your Zerodha Account */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-user-circle me-2"></i> Your Zerodha
                  Account
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  Content for Your Zerodha Account goes here...
                </div>
              </div>
            </div>

            {/* Kite */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-user-circle me-2"></i> Kite
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  Content for Your Zerodha Account goes here...
                </div>
              </div>
            </div>

            {/* Funds */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-user-circle me-2"></i> Funds
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  Content for Your Zerodha Account goes here...
                </div>
              </div>
            </div>

            {/* Console*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-user-circle me-2"></i> Console
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  Content for Your Zerodha Account goes here...
                </div>
              </div>
            </div>

            {/* Coin */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-user-circle me-2"></i> Console
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  Content for Your Zerodha Account goes here...
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="mb-4 supportRightTop">
            <ul className="p-5" style={{ lineHeight: "1.8em" }}>
              <li className="mb-3">
                <a href="">Rights Entitlements listing in September 2025</a>
              </li>
              <li>
                <a href="">Surveillance measure on scrips - September 2025</a>
              </li>
            </ul>
          </div>

          <div>
            <table
              className="table border table-bordered"
              id="supportQuickLinks"
            >
              <thead>
                <tr className="table-light">
                  <th className="fw-semibold" scope="col ">
                    Quick Links
                  </th>
                </tr>
              </thead>
              <tbody className="border">
                <tr>
                  <td>
                    <a href="">1. Track account opening</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">2. Track segment activation</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">3. Intraday margins</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">4. Kite user manual</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
