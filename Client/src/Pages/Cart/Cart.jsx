import React from 'react'

import { useSelector, useDispatch } from "react-redux"
import { addToCartData ,removeFromCartData } from "../../GlobalStore/actions/addToCart"

import './Cart.scss'

const Cart = () => {
    let dispatch = useDispatch()

    const cartData = useSelector((state) => state.cartData)

    const addToCart = (data) => {
        dispatch(addToCartData(data))
    }
    const removeFromCart = (data) => {
        dispatch(removeFromCartData(data))
    }

    return (
        <>
            <div class="cart_container">

                <div class="cart transition is-open">

                    <div class="table">

                        <div class="layout-inline row th">
                            <div class="col col-pro">Product</div>
                            <div class="col col-price align-center ">
                                Price
                            </div>
                            <div class="col col-qty align-center">QTY</div>
                            <div class="col end">Total</div>
                        </div>

                        {
                            cartData && cartData.length >= 1 && cartData.map((data) => {
                                return (
                                    <>
                                        <div class="layout-inline row">

                                            <div class="col col-pro layout-inline">
                                                <img src={data.img.public} alt="kitten" />
                                                <p>{data.title}</p>
                                            </div>

                                            <div class="col col-price col-numeric align-center ">
                                                <p>${data.price}</p>
                                            </div>

                                            <div class="col col-qty layout-inline">
                                                <div onClick={() => removeFromCart(data)} class="qty qty-minus">-</div>
                                                <input type="numeric" value={data.qty} />
                                                <div onClick={() => addToCart(data)} class="qty qty-plus">+</div>
                                            </div>

                                            <div class="col col-vat col-numeric end">
                                                <p>${data.price * data.qty}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }



                        {/* <div class="layout-inline row row-bg2">

                            <div class="col col-pro layout-inline">
                                <img src="http://lovemeow.com/wp-content/uploads/2012/05/kitten81.jpg" alt="kitten" />
                                <p>Scared Little Kittie</p>
                            </div>

                            <div class="col col-price col-numeric align-center ">
                                <p>£23.99</p>
                            </div>

                            <div class="col col-qty  layout-inline">
                                <a href="#" class="qty qty-minus ">-</a>
                                <input type="numeric" value="1" />
                                <a href="#" class="qty qty-plus">+</a>
                            </div>

                            <div class="col col-vat col-numeric">
                                <p>£1.95</p>
                            </div>
                            <div class="col col-total col-numeric">
                                <p>£25.94</p>
                            </div>

                        </div>

                        <div class="layout-inline row">

                            <div class="col col-pro layout-inline">
                                <img src="http://cdn.cutestpaw.com/wp-content/uploads/2012/04/l-my-first-kitten.jpg" alt="kitten" />
                                <p>Curious Little Begger</p>
                            </div>

                            <div class="col col-price col-numeric align-center ">
                                <p>£59.99</p>
                            </div>

                            <div class="col col-qty layout-inline">
                                <a href="#" class="qty qty-minus">-</a>
                                <input type="numeric" value="3" />
                                <a href="#" class="qty qty-plus">+</a>
                            </div>

                            <div class="col col-vat col-numeric">
                                <p>£2.95</p>
                            </div>
                            <div class="col col-total col-numeric">
                                <p>£182.95</p>
                            </div>
                        </div> */}

                        <div class="tf">
                            <div class="row layout-inline">
                                <div class="col">
                                    <p>SUB TOTAL</p>
                                </div>
                                <div class="col"></div>
                            </div>
                            {/* <div class="row layout-inline">
                                <div class="col">
                                    <p>Shipping</p>
                                </div>
                                <div class="col"></div>
                            </div>
                            <div class="row layout-inline">
                                <div class="col">
                                    <p>Total</p>
                                </div>
                                <div class="col"></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default Cart