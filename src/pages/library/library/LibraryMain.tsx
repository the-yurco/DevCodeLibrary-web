import React from "react";
import Card_layout from "../../../components/Card/Card_main";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const LibraryMain = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <Container fluid>
          <Row className="gap-3">
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/junior-academy.jpg"
                name="Junior Academy"
                description="This is Junior Academy"
                link="/library/junior-academy"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/senior-academy.jpg"
                name="Senior Academy"
                description="This is Senior Academy"
                link="/library/senior-academy"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/tips-tricks.jpg"
                name="Tips & Tricks"
                description="These are Tips & Tricks"
                link="/library/tips-tricks"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/challenges.jpg"
                name="Challenges"
                description="These are Challenges"
                link="/library/test-challenges"
              />
            </Col>
          </Row>
          {/* <Row className="mt-3 gap-3">
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/junior-academy.jpg"
                name="Junior Academy"
                description="This is Junior Academy"
                link="/library/junior-academy"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/challenges.jpg"
                name="Challenges"
                description="These are Challenges"
                link="/library/test-challenges"
              />
            </Col>
          </Row> */}
        </Container>
      </section>
    </>
  );
};

export default LibraryMain;
