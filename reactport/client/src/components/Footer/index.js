import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <div className="container">
      <Navbar bg="light" fixed="bottom" variant="light">
        <Navbar.Brand href="#home" text-align="center">
          Tanmay Sarker
        </Navbar.Brand>
        <nav className="mr-auto"></nav>
      </Navbar>
    </div>
  );
};

export default Footer;
