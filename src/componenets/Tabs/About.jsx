import React from "react";


import "./about.css"
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="body">
      <h1>Put your Mouse on Social Links</h1>
      <div class="navbar">Social 
        <ul class="menu">
          <li><Link to="#" class="fa fa-facebook"> </Link></li>
          <li><Link to="#" class="fa fa-instagram"> </Link></li>
          <li><Link to="#" class="fa fa-google"> </Link></li>
          <li><Link to="#" class="fa fa-twitch"> </Link></li>
          <li><Link to="#" class="fa fa-whatsapp"> </Link></li>
          <li><Link to="#" class="fa fa-telegram"> </Link></li>
          <li><Link to="#" class="fa fa-linkedin"> </Link></li>
          <li><Link to="#" class="fa fa-twitter"> </Link></li>
          <li><Link to="#" class="fa fa-github"> </Link></li>
        </ul>
      </div>
    </div>
  );
}
