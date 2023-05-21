import React from 'react';
import Card_layout from '../../../components/Card/Card_main';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card_main from '../../../components/Card/Card_main';

const LibraryMain = () => {
	return (
		<>
			<Container className="library-container">
				<Row className="row-container">
					<Col lg={3} sm={6} md={4}>
						<Card_main
							imgUrl={''}
							name={'jebem na to '}
							description={
								'l;aksjdflkajsdflkjasl;dfjasl;fjalskfjkasdjflkoiewquriwuroiuqeroiuqweropiuqwroiuwqoiruwqopriuwqoiruwqoiruqwoiruwqoriuwqeoriuweoru'
							}
							link={''}
						/>
					</Col>
					<Col lg={3} sm={6} md={4}>
						<Card_main
							imgUrl={''}
							name={'jebem na to '}
							description={
								'l;aksjdflkajsdflkjasl;dfjasl;fjalskfjkasdjflkoiewquriwuroiuqeroiuqweropiuqwroiuwqoiruwqopriuwqoiruwqoiruqwoiruwqoriuwqeoriuweoru'
							}
							link={''}
						/>
					</Col>
					<Col lg={3} sm={6} md={4}>
						<Card_main
							imgUrl={''}
							name={'jebem na to '}
							description={
								'l;aksjdflkajsdflkjasl;dfjasl;fjalskfjkasdjflkoiewquriwuroiuqeroiuqweropiuqwroiuwqoiruwqopriuwqoiruwqoiruqwoiruwqoriuwqeoriuweoru'
							}
							link={''}
						/>
					</Col>
					<Col lg={3} sm={6} md={4}>
						<Card_main
							imgUrl={''}
							name={'jebem na to '}
							description={
								'l;aksjdflkajsdflkjasl;dfjasl;fjalskfjkasdjflkoiewquriwuroiuqeroiuqweropiuqwroiuwqoiruwqopriuwqoiruwqoiruqwoiruwqoriuwqeoriuweoru'
							}
							link={''}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LibraryMain;
