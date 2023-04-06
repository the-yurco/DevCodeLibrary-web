import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<header className="header-top-strip">
				<Navbar collapseOnSelect expand="lg" variant="dark" className="m-4">
					<Container>
						<Navbar.Brand href="/">DevCodeLibrary</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/about">About</Nav.Link>
								<Nav.Link href="/library">Libeary</Nav.Link>
								<Nav.Link href="/support">Support</Nav.Link>
								<Nav.Link href="/contact">Contact</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href="/signin">SignIn</Nav.Link>
								<Nav.Link href="/signup">SignUp</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;
