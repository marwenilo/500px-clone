import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "../components/views/Navigation/NavContainer"
import Home from "../components/views/home/Home"
const AppRouter = () => (
<Router>

    <NavBar />
    <Switch>
    <Route path="/" exact component={Home} />
    </Switch>
</Router>
)
export default AppRouter;