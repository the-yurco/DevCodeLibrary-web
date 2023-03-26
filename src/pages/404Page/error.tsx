import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Page404 = () => {
  return (
    <>
      <section className="page404">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="error_h1">
                404 <span>error</span>
                <h3 className="rounded p-2">
                  This page is now unreachable, move to another page through
                  navbar.
                </h3>
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Page404;
