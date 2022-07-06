import React from 'react'

import NavBar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

import Cards from './Components/Cards'

import "./Products.scss"


const Products = () => {
    return (
        <>
            <div className="products_container">
                <NavBar />
                <Cards />
                <Footer />
            </div>
        </>
    )
}

export default Products