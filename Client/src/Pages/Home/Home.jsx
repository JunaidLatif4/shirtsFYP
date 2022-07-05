import React from 'react'

import NavBar from "../../Components/Navbar/Navbar"
import HeroSection from "./Components/DressCodeMen/DressCodeMen"
import WhatFits from "./Components/WhatFits/WhatFits"
import WelcomeDC from "./Components/WelcomeDC/WelcomeDC"
import DressCode from "./Components/DressCodeQuiz/DressCodeQuiz"
import Footer from "../../Components/Footer/Footer"
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart'

const Home = () => {

    let productsData = useSelector((state) => state.productsData)

    return (
        <>
            <NavBar />
            {/* <HeroSection />
            {
                productsData &&
                <WhatFits products={productsData} />
            }
            <WelcomeDC />
            <DressCode /> */}
            <Cart/>
            <Footer />
        </>
    )
}

export default Home