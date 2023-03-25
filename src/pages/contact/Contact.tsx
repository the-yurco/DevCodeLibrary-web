import React from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import Card_Layout3 from "../../components/Card/card-contact/Card_Layout3";
import { BsDiscord, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <Container fluid className="grid ">
          <CardGroup className="py-3 gap-3 g-row-3 d-flex justify-content-center">
            <Row className="gap-3">
              <Col>
                <Card_Layout3
                  link_ly3="asdasd"
                  react_icon_ly3={<BsDiscord size="10rem" />}
                  card_title_ly3="Discord"
                  card_description_ly3="Help us improve our destiny"
                />
              </Col>
              <Col>
                <Card_Layout3
                  link_ly3="Tip {React}"
                  react_icon_ly3={<BsTwitter size="10rem" />}
                  card_title_ly3="Twitter"
                  card_description_ly3="Updates & Realises"
                />
              </Col>
              <Col>
                <Card_Layout3
                  link_ly3="Tip {React}"
                  react_icon_ly3={<BsTwitter size="10rem" />}
                  card_title_ly3="Twitter"
                  card_description_ly3="Updates & Realises"
                />
              </Col>
              <Col>
                <Card_Layout3
                  link_ly3="Tip {React}"
                  react_icon_ly3={<BsTwitter size="10rem" />}
                  card_title_ly3="Twitter"
                  card_description_ly3="Updates & Realises"
                />
              </Col>
            </Row>
          </CardGroup>
        </Container>
      </section>
    </>
  );
};

export default Contact;
