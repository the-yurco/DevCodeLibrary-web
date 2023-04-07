import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';
// import Hero from "../../components/Hero/Hero";

const Home = () => {
	return (
		<>
			<section className="home-wrapper m-4">
				<Container className="w-100">
					<Row className="d-flex justify-content-center">
						<Col
							className="main-banner p-4 d-flex flex-column justify-content-between"
							lg={4}
						>
							<div>
								<h1>Learn anything Fast and Efficiently</h1>
								<h3>
									Unleash Your Programming Potential for{' '}
									<span className=" px-3">FREE</span>
								</h3>
								<div className="mt-4">
									<p>
										&#x2022; Database of every serious programming course on
										internet
									</p>
									<p>
										&#x2022; Access courses from top-rated institutions and
										instructors
									</p>
									<p>
										&#x2022; Learn at your own pace and level up your skills
									</p>
								</div>
							</div>
							<button id="trailer-toggle-btn" className="btn rounded-0">
								Trailer
							</button>
						</Col>
						{/* <Col className="secondary-banner"></Col> */}
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Home;
