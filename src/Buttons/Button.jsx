import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <div className="button-card">
      <button className="button-big">
        <Link className="button-link" to="/Login">
          Enter
        </Link>
      </button>
      <h2 className="button-description">Learn Programming with Us</h2>
    </div>
  );
}
