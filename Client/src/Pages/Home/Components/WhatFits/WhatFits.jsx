import React from "react";
import "./WhatFits.css";

import pic1 from "../../../../Assets/images/weWorkPic2.png";
import pic2 from "../../../../Assets/images/weWorkPic1.png";
const WhatFits = () => {

        const data=[
             {
                img:pic2,
                flag:true
               
            },
            {
                img:pic1,
                para1:"Just-right jeans? Easy.",
                para2:"Jeans from $65 to $199",
                flag:false
            },
           
            {
                img:pic2,
                flag:true
               
            },
            {
                img:pic2,
                flag:true
               
            },
            {
                img:pic1,
                para1:"Just-right jeans? Easy.",
                para2:"Jeans from $65 to $199",
                flag:false
            },
           
            {
                img:pic2,
                flag:true
               
            }
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
        {data.map((item, index) => {
            return ( 
            <div className="whatFitsCardInner">
              <img src={item.img} alt="" className="cardImgWeFits" />
  
              <div className={item.flag==true?"cardBottomContent":"card1txtWhatFit"}>{item.para1} </div>
              <div className={item.flag==true?"cardBottomContent":"card2txtWhatFit"}> {item.para2}</div>
           
          </div> )
        })}
         </div>

         <button className="btnViewAll">View all</button>

      </div>
    </>
  );
};

export default WhatFits;
