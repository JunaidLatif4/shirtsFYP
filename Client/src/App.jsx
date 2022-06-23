import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./Pages/Home/Home"
import Login from "./Pages/Register/Userlogin/Userlogin"
import SignUp from "./Pages/Register/Signup/Signup"

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </>
    )
}

export default App