import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Tabs/About";
import Contact from "./Tabs/Contact";
import LandingPage from "./LandingPage";
import Login from "../inputs/Login";

import Register from "../inputs/Register";
import Gallery from "./Tabs/Gallery";
import ChatZone from "./Tabs/ChatZone";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Contact" component={Contact} />
    <Route path="/About" component={About} />
    <Route path="/Login" component={Login} />
   
    <Route path="/Register" component={Register} />
    <Route path="/Gallery" component={Gallery} />
    <Route path="/ChatZone" component={ChatZone} />
  </Switch>
);

export default Main;
