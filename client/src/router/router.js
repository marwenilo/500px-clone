import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "../components/views/Navigation/NavContainer"
import Home from "../components/views/home/Home"
import Login from "../components/views/Login/Login"
import Register from "../components/views/Registration/SignUp"

const AppRouter = () => (
<Router>

    <NavBar />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    </Switch>
</Router>
)
export default AppRouter;