import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Login from "../inputs/Login";
import Button from "../Buttons/Button";
import Register from "../inputs/Register";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Contact" component={Contact} />
    <Route path="/About" component={About} />
    <Route path="/Login" component={Login} />
    <Route path="/Login" component={Button} />
    <Route path="/Register" component={Register} />
  </Switch>
);

export default Main;
