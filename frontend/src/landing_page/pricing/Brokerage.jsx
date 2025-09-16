import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-3">
        <ul className="nav nav-tabs mb-4 fs-5">
          <li className="nav-item">
            <a className="nav-link" href="">
              Equity
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Currency
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Commodity
            </a>
          </li>
        </ul>

        <div className="table-responsive table-bordered">
          <table className="table table-bordered text-center align-middle">
            <thead>
              <tr>
                <th> </th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Brokerage</strong>
                </td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr className="table-light">
                <td>
                  <strong>STT/CTT</strong>
                </td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.02% on the sell side</td>
                <td>
                  <ul className="list-unstyled mb-0">
                    <li>0.125% of intrinsic value on exercised options</li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Transaction charges</strong>
                </td>
                <td>
                  NSE: 0.00297% <br /> BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00297% <br /> BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00173% <br /> BSE: 0
                </td>
                <td>
                  NSE: 0.03503% <br /> BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr className="table-light">
                <td>
                  <strong>GST</strong>
                </td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>
                  <strong>SEBI charges</strong>
                </td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr className="table-light">
                <td>
                  <strong>Stamp charges</strong>
                </td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-center mt-4 mb-5 fs-5">
          <a href="#" className="text-decoration-none">
            Calculate your costs upfront
          </a>
          &nbsp; using our brokerage calculator
        </p>
      </div>

      <div className="row mt-5 p-3">
        <h2 className="mb-4 fs-4">Charges for account opening</h2>
        <div className="table-responsive table-bordered">
          <table className="table bm-0">
            <thead className="border">
              <tr>
                <th className="fw-semibold">Type of account</th>
                <th className="fw-semibold">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td>
                  <span className="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr className="table-light">
                <td>Offline account</td>
                <td>
                  <span className="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr className="table-light">
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-5 p-3">
        <h2 className="mb-4 fs-4">Demat AMC (Annual Maintenance Charge)</h2>

        <div className="table-responsive">
          <table className="table border mb-0">
            <thead className="border">
              <tr>
                <th className="fw-semibold">Value of holdings</th>
                <th className="fw-semibold">AMC</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td>
                  <span
                    className="badge"
                    style={{ backgroundColor: "#28a745", fontSize: "0.9em" }}
                  >
                    FREE*
                  </span>
                </td>
              </tr>
              <tr className="table-light">
                <td>₹4 lakh – ₹10 lakh</td>
                <td>₹ 100 per year, charged quarterly*</td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td>₹ 300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-2 text-muted small">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a href="#" className="text-primary">
            click here
          </a>
          .
        </p>
      </div>

      <div className="row mt-5 p-3">
        <h2 className="mb-4 fs-4">Charges for optional value added services</h2>

        <div className="table-responsive">
          <table className="table border mb-0">
            <thead className="border">
              <tr>
                <th className="fw-semibold">Service</th>
                <th className="fw-semibold">Billing Frequency</th>
                <th className="fw-semibold">Charges</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>TickerTape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr className="table-light">
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy &amp; Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Personal: Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-5 p-3">
        <h2 className="mb-4 fs-4">Charges explained</h2>
        <div className="col-6 text-muted">
          <h6>Securities/Commodities transaction tax</h6>
          <p>
            <small>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </small>
          </p>
          <p>
            <small>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </small>
          </p>
          <h6>Transaction/Turnover Charges</h6>
          <p>
            <small>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </small>
          </p>
          <p>
            <small>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </small>
          </p>
          <p>
            <small>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </small>
          </p>
          <p>
            <small>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </small>
          </p>
          <h6>Call & trade</h6>
          <p>
            <small>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </small>
          </p>
          <h6>Stamp charges</h6>
          <p>
            <small>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </small>
          </p>
          <h6>NRI brokerage charges</h6>
          <small>
            <ul>
              <li>
                For a non-PIS account, 0.5% or ₹50 per executed order for equity
                and F&O (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </small>
          <h6>Account with debit balance</h6>
          <p>
            <small>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </small>
          </p>
          <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
          <ul>
            <li>
              <small>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </small>
            </li>
            <li>
              <small>
                Options - ₹50 per crore + GST traded value (premium value).
              </small>
            </li>
            <li>
              <small>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </small>
            </li>
          </ul>
          <h6>Margin Trading Facility (MTF)</h6>
          <ul>
            <li>
              <small>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </small>
            </li>
            <li>
              <small>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </small>
            </li>
            <li>
              <small>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </small>
            </li>
          </ul>
        </div>
        <div className="col-6 text-muted">
          <h6>GST</h6>
          <p>
            <small>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </small>
          </p>
          <h6>SEBI Charges</h6>
          <p>
            <small>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </small>
          </p>
          <h6>DP (Depository participant) charges</h6>
          <p>
            <small>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </small>
          </p>
          <p>
            <small>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </small>
          </p>
          <p>
            <small>
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </small>
          </p>
          <h6>Pledging charges</h6>
          <p>
            <small>₹30 + GST per pledge request per ISIN.</small>
          </p>
          <h6>AMC (Account maintenance charges)</h6>
          <p>
            <small>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA.
            </small>
          </p>
          <p>
            <small>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC.
            </small>
          </p>
          <h6>Corporate action order charges</h6>
          <p>
            <small>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </small>
          </p>
          <h6>Off-market transfer charges</h6>
          <p>
            <small>₹25 per transaction.</small>
          </p>
          <h6>Physical CMR request</h6>
          <p>
            <small>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </small>
          </p>
          <h6>Payment gateway charges</h6>
          <p>
            <small>₹9 + GST (Not levied on transfers done via UPI)</small>
          </p>
          <h6>Delayed Payment Charges</h6>
          <p>
            <small>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account
            </small>
          </p>
          <h6>Trading using 3-in-1 account with block functionality</h6>
          <small>
            <ul>
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </small>
        </div>
      </div>

      <div className="row p-3 mt-5 mb-5">
        <h6>Disclaimer</h6>
        <p>
          <small>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </small>
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
