import React from "react";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useDispatch, useSelector } from "react-redux";
import { addToCartData } from "../../../../GlobalStore/actions/addToCart";

import "./WhatFits.scss";



const WhatFits = (props) => {
  let dispatch = useDispatch()

  let cartData = useSelector((state) => state.cartData)

  const addToCart = (data) => {
    dispatch(addToCartData(data))
  }

  return (
    <>
      <div className="mainContainerWhatFits">
        <p className="weDoWorkTxt">We do the work, you get what fits</p>
        <p className="paraTxtWeDorWork">
          We get to know your style, fit and price range based on your style
          quiz, requests and feedback.
        </p>
        <div className="whatFitsCard">
          {props.products.map((data, index) => {
            var findItem = cartData.filter((val) => val._id == data._id)
            console.log("-------------", findItem);
            return (
              index <= 5 &&
              <>
                <div className="card_box">
                  <img src={data.img.public} />
                  <div className="price">
                    {data.price}
                  </div>
                  <div className="cart" onClick={() => addToCart(data)}>
                    <div className="cart_icon">
                      <ShoppingCartIcon />
                      {
                        findItem && findItem.length >= 1 &&
                        <div className="count">
                          {findItem[0].qty}
                        </div>
                      }
                    </div>
                  </div>
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
