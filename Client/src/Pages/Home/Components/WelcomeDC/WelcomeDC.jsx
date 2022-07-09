import React from "react";
import './WelcomeDC.css'
import pic from '../../../../Assets/images/keagan-henman-xPJYL0l5Ii8-unsplash 1.png'
const WelcomeDC = () => {
  return (
    <>
      <div className="mainContainerWelcomeDC">
        <div className="dcStoreTopText">
          <p className="welcomeDcTxt">Welcome To The DC Store</p>
          <p className="uniqueBrandsTxt">1,000+ unique brands to fit your style</p>
        </div>
        <img src={pic} alt="" className="imgWelcomeDC" />
        <p className="dontNeedStyleTxt">Don't Need A Stylist?</p>
        <p className="browseOurStoreTxt">Browse our  store to find unique brands that fit your personal style. </p>
        {/* <button className="btnAccessDC">Access The DC Store</button> */}
      </div>
    </>
  );
};

export default WelcomeDC;
