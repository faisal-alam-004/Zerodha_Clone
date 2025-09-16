import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fafafaff", borderTop: "0.1px solid #d1d0d0ff" }}>
      <div className="container p-4">
        <div className="row  mt-3">
          <div className="col">
            <img src="media/images/logo.svg" alt="" style={{ width: "50%" }} className="mb-4" />
            <p>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col">
            <p className="mb-4">Account</p>
            <a className="account" href="">Open demat account</a>
            <br />
            <a className="account" href="">Minor demat account</a>
            <br />
            <a className="account" href="">NRI demat account</a>
            <br />
            <a className="account" href="">Commodity</a>
            <br />
            <a className="account" href="">Dematerialisation</a>
            <br />
            <a className="account" href="">Fund transfer</a>
            <br />
            <a className="account" href="">MTF</a>
            <br />
            <a className="account" href="">Referral program</a>
            <br />
          </div>
          <div className="col">
            <p className="mb-4">Support</p>
            <a className="support" href="">Contact us</a> <br />
            <a className="support" href="">Support portal</a> <br />
            <a className="support" href="">How to file a complaint?</a> <br />
            <a className="support" href="">Status of your complaints</a> <br />
            <a className="support" href="">Bulletin</a> <br />
            <a className="support" href="">Circular</a> <br />
            <a className="support" href="">Z-Connect blog</a> <br />
            <a className="support" href="">Downloads</a> <br />
          </div>
          <div className="col">
            <p className="mb-4">Company</p>
            <a className="company" href="">About</a> <br />
            <a className="company" href="">Philosophy</a> <br />
            <a className="company" href="">Press & media</a> <br />
            <a className="company" href="">Careers</a> <br />
            <a className="company" href="">Zerodha Cares</a> <br />
            <a className="company" href="">Zerodha.tech</a> <br />
            <a className="company" href="">Open source</a> <br />
          </div>
        </div>

        <div className="mt-4 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>India's largest broker based on networth as per NSE. </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services.
          </p>
        </div>

        <div className="row">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <a className="imp-links" href="">NSE</a>
              <a className="imp-links" href="">BSE</a>
              <a className="imp-links" href="">MCX</a>
              <a className="imp-links" href="">Terms &amp; conditions</a>
              <a className="imp-links" href="">Policies &amp; procedures</a>
              <a className="imp-links" href="">Privacy policy</a>
              <a className="imp-links" href="">Disclosure</a>
              <a className="imp-links" href="">For investor's attention</a>
              <a className="imp-links" href="">Investor charter</a>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
