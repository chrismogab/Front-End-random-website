import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="home">
        Home
      </Link>

      <ul>
        <Link to="/Increment"> Increment</Link>
        <Link to="/Todo">Tasks</Link>
        <Link to="/WatchMovie">MyMovies</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
