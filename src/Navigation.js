import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
        <li style={{ paddingRight: "40px" }}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Info</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
