import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';

const Layout = () => {
	return (
		<>
			<Container fluid>
				<Header />
				<Outlet />
				{/* <Footer /> */}
			</Container>
		</>
	);
};

export default Layout;
