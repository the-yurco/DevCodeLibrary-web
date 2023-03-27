import React from "react";
import Card_layout from "../../../components/Card/Card_main";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Academy = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <Container fluid>
          <Row lg={4} className="gap-3">
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/kids-field.jpg"
                name="Kids Field"
                description="This is Kids Field "
                link="/library/junior-academy/kids-field"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/student-field.jpg"
                name="Student Field"
                description="This is Student Field"
                link="/library/junior-academy/student-field"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Academy;
