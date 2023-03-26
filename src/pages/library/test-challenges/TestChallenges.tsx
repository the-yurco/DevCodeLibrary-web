import React from "react";
import Card_layout from "../../../components/Card/Card_main";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const TestChallenges = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <Container fluid>
          <Row className="gap-3">
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/quiz.jpg"
                name="Quizes"
                description="These are Quizes"
                link="/junior-academy/quizes"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/problem.jpg"
                name="Problems"
                description="These are Problems"
                link="/senior-academy/problems"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/projects.jpg"
                name="Projects"
                description="These are Projects"
                link="/tips-tricks/projects"
              />
            </Col>
            <Col>
              <Card_layout
                imgUrl="/src/assets/images/challenges2.jpg"
                name="Challenges"
                description="These are Challenges"
                link="/test-challenges/challenges"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TestChallenges;
