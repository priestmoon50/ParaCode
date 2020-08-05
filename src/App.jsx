import React from "react";
import "./App.css";
import Main from "./componenets/Main";
import { Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div style={{ height: "300px", position: "relative" }}>
        

          <Header transparent title="Title" style={{ color: "white" }}>
            <Navigation>
              <Link to="/">LandingPage</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/About">About</Link>
              <Link to="/Login">Login</Link>
              <Link to="/Register">Register</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/">More</Link>
              <Link to="/">More</Link>
              <Link to="/">More</Link>
              <Link to="/">More</Link>
            </Navigation>
          </Drawer>
          <Content>
          <Main />
          </Content>
      
      </div>
    </div>
  );
}

export default App;
