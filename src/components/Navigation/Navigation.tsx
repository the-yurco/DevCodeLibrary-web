import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <>
      <Navbar
        style={{ background: "#4361ee" }}
        variant="dark"
        className="d-flex justify-content-between rounded px-3 mt-3"
      >
        <Navbar.Brand href="/" className="py-1 px-1 brand_link rounded-1 logo ">
          DevCodeLibrary <span className="rounded-1 py-1 px-1">ALPHA</span>
        </Navbar.Brand>
        <Nav className="d-flex w-50 navbar_links">
          <Nav.Link href="/about" className="link">
            About
          </Nav.Link>
          <Nav.Link href="/library" className="link">
            Library
          </Nav.Link>
          <Nav.Link href="/error" className="link">
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
            className="py-1 px-5 rounded-1"
          >
            Sign In
          </Navbar.Brand>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
