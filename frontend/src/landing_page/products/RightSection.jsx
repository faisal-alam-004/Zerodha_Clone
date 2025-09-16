import React from "react";

function RightSecttion({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5 mt-5">
          <h1 className="fs-3 mt-5">{productName}</h1>
          <p className="fs-6 lh-lg">{productDescription}</p>
          <div>
            <a href={learnMore}>Learn more</a>
          </div>
        </div>

        <div className="col-7">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSecttion;
