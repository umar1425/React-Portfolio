import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "../NavLink";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <NavLink path="/" classes={["navbar-brand"]}>
          Tanmay 
        </NavLink>

        <nav className="ml-auto">
          <NavLink path="/">About</NavLink>
          <NavLink path="/portfolio">Portfolio</NavLink>
          <NavLink path="/contact">Contact</NavLink>
        </nav>
      </Navbar>
    </div>
  );
};

export default Header;
