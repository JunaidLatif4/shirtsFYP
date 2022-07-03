import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./Pages/Home/Home"
import Login from "./Pages/Register/Userlogin/Userlogin"
import SignUp from "./Pages/Register/Signup/Signup"

import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';



const App = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </>
    )
}

export default App