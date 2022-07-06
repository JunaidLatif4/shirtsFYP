import React, { useEffect } from 'react'

import NavBar from "../../Components/Navbar/Navbar"
import HeroSection from "./Components/DressCodeMen/DressCodeMen"
import WhatFits from "./Components/WhatFits/WhatFits"
import WelcomeDC from "./Components/WelcomeDC/WelcomeDC"
import DressCode from "./Components/DressCodeQuiz/DressCodeQuiz"
import Footer from "../../Components/Footer/Footer"

import { useSelector, useDispatch } from 'react-redux'
import { addUserData } from '../../GlobalStore/actions/addUserData'

import Cart from '../Cart/Cart'


const Home = () => {
    let dispatch = useDispatch()

    let productsData = useSelector((state) => state.productsData)

    const checkingUser = () => {
        let userDataLocal = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null
        if (userDataLocal) {
            dispatch(addUserData(userDataLocal))
        } else {
            localStorage.removeItem("userData")
        }
    }

    useEffect(() => {
        checkingUser()
    }, [])

    return (
        <>
            <NavBar />
            <HeroSection />
            {
                productsData &&
                <WhatFits products={productsData} />
            }
            <WelcomeDC />
            <DressCode />
            {/* <Cart/> */}
            <Footer />
        </>
    )
}

export default Home