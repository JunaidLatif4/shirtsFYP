import React from 'react'

import NavBar from "../../Components/Navbar/Navbar"
import HeroSection from "./Components/DressCodeMen/DressCodeMen"
import WhatFits from "./Components/WhatFits/WhatFits"
import WelcomeDC from "./Components/WelcomeDC/WelcomeDC"
import DressCode from "./Components/DressCodeQuiz/DressCodeQuiz"
import Footer from "../../Components/Footer/Footer"
import { useSelector } from 'react-redux'

const Home = () => {

    let productsData = useSelector((state) => state.productsData)

    return (
        <>
            <NavBar />
            <HeroSection />
            <WhatFits products={productsData} />
            <WelcomeDC />
            <DressCode />
            <Footer />
        </>
    )
}

export default Home