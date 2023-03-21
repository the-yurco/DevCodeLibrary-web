import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import SingIn from "../../pages/sing-in/SingIn";

const Navigation = () => {
  return (
    <>
      <Navbar
        bg="transparent"
        variant="dark"
        className="d-flex justify-content-between "
      >
        <Navbar.Brand href="/" className="py-1 px-3 brand_link rounded-1">
          DevCodeLibrary
        </Navbar.Brand>
        <Nav className="d-flex w-50 navbar_links">
          <Nav.Link href="/about" className="link">
            About
          </Nav.Link>
          <Nav.Link href="/library" className="link">
            Library
          </Nav.Link>
          <Nav.Link href="/support" className="link">
            Support us
          </Nav.Link>
          <Nav.Link href="/contact" className="link">
            Contact
          </Nav.Link>
        </Nav>
        <Nav className="d-flex gap-3">
          <Navbar.Brand
            href="/signin"
            id="signin"
            className="py-1 px-4 rounded-1"
          >
            Sign In
          </Navbar.Brand>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
