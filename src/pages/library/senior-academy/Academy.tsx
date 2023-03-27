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
                imgUrl="/src/assets/images/starter-field.jpg"
                name="Starter Field"
                description="This is a Starter Field"
                link="/library/senior-academy/starter-field"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/intermediate-field.jpg"
                name="Intermediate Field"
                description="This is an Intermediate Field"
                link="/library/senior-academy/intermediate-field"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/advanced-field.jpg"
                name="Advanced Field"
                description="This is an Advanced Field"
                link="/library/senior-academy/advanced-field"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Academy;
