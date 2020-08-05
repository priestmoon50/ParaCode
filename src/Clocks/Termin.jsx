import React from "react";
import Logo from "./Logo.png";

const user = {
  first: "Desgin",
  last: "Pattern",
};

function FormatName(user) {
  return user.first + " " + user.last;
}

const element = <h1>Site Name {FormatName(user)}</h1>;

export default function Termin() {
  return (
    <div>
      <h1>
        {" "}
        WELCOME TO <br /> <img src={Logo} alt="My logo" /> {element}{" "}
      </h1>
    </div>
  );
}

// https://www.tripsavvy.com/thmb/IAxlkaHCIh8n99mYdLG8Pl8BV4A=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/CochemCastleGettyImages-935744990serts-e9468936dba0434384b32b6dd0bc61d9.jpg
{
  /* <img src={"https://www.tripsavvy.com/thmb/IAxlkaHCIh8n99mYdLG8Pl8BV4A=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/CochemCastleGettyImages-935744990serts-e9468936dba0434384b32b6dd0bc61d9.jpg"} /> */
}
