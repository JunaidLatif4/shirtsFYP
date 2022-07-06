import React, { useState, useEffect } from 'react'

import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useSelector, useDispatch } from 'react-redux'
import { addToCartData } from '../../../GlobalStore/actions/addToCart'

import "./Cards.scss"


const Cards = (props) => {
    let dispatch = useDispatch()

    let productsData = useSelector((state) => state.productsData)
    let cartData = useSelector((state) => state.cartData)

    const [products, setProducts] = useState(null)
    const [category, setCategory] = useState("all")


    const addToCart = (data) => {
        dispatch(addToCartData(data))
    }

    const sortProds = async () => {
        if (category == "s") {
            const prod = await productsData.filter((data) => data.category.title == "Summer Collection")
            setProducts(prod)
        } else if (category == "w") {
            const wprod = await productsData.filter((data) => data.category.title == "Winter Collection")
            setProducts(wprod)
        } else {
            setProducts(productsData)
        }
    }

    useEffect(() => {
        if (productsData) {
            sortProds()
        }
    }, [productsData, category])

    return (
        <>
            <div className="cards_container">
                <div className="options">
                    <Button style={{ backgroundColor: category == "all" ? "#25282A" : null, color: category == "all" ? "white" : null }} onClick={() => setCategory("all")} className='btn'> All </Button>
                    <Button style={{ backgroundColor: category == "s" ? "#25282A" : null, color: category == "s" ? "white" : null }} onClick={() => setCategory("s")} className='btn'> Summer </Button>
                    <Button style={{ backgroundColor: category == "w" ? "#25282A" : null, color: category == "w" ? "white" : null }} onClick={() => setCategory("w")} className='btn'> Winter </Button>
                </div>
                <div className="card_box">
                    {products && products.map((data, index) => {
                        var findItem = cartData.filter((val) => val._id == data._id)
                        console.log("-------------", findItem);
                        return (
                            <>
                                <div className="card">
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
            </div>
        </>
    )
}

export default Cards