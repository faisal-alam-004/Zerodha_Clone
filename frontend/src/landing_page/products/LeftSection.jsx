import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 p-5">
          <img src={imageURL} alt="Left Image" />
        </div>

        <div className="col-5 p-5 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="fs-6 lh-lg">{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              {tryDemo}
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              {learnMore}
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt=""
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
