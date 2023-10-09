import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { GiBigDiamondRing } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              <GiBigDiamondRing className="navbar-icon"/>
              Mona & Dixon
            </Link>
            <div className="menu-icon" onClick={handleClick}>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/rsvp"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")}>
                  RSVP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/messages"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")}>
                  Messages
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;