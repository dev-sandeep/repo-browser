import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"

const Repos = lazy(()=>import("./views/Repos"));
const RepoDetails = lazy(()=>import("./views/RepoDetail"));
const Users = lazy(()=>import("./views/Users"));

const MainRouter = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Repos} />
            </Switch>
        </Router>
    );
}

export default MainRouter;

