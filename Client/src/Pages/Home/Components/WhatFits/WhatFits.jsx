import React from "react";
import "./WhatFits.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import pic1 from "../../../../Assets/images/weWorkPic2.png";
import pic2 from "../../../../Assets/images/weWorkPic1.png";
import shirt from "../../../../Assets/images/shirt.webp";
const WhatFits = () => {

  const data = [
    {
      img: shirt,
      flag: true

    },
    {
      img: shirt,
      para1: "Just-right jeans? Easy.",
      para2: "Jeans from $65 to $199",
      flag: false
    },

    {
      img: shirt,
      flag: true

    },
    {
      img: shirt,
      flag: true

    },
    {
      img: shirt,
      flag: true

    },
    {
      img: shirt,
      flag: true

    },

  ]

  return (
    <>
      <div className="mainContainerWhatFits">
        <p className="weDoWorkTxt">We do the work, you get what fits</p>
        <p className="paraTxtWeDorWork">
          We get to know your style, fit and price range based on your style
          quiz, requests and feedback.
        </p>
        <div className="whatFitsCard">
          {data.map((e) => {
            return (
              <>
                <div className="card_box">
                  <img src={e.img} />
                  <div className="price">
                    $200
                  </div>
                  <ShoppingCartIcon className="cart" />
                </div>
              </>
            )
          })}
        </div>

        <button className="btnViewAll">View all</button>

      </div>
    </>
  );
};

export default WhatFits;
