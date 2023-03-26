import { Container, Row, Col, CardGroup } from "react-bootstrap";
import { BsDiscord, BsMailbox, BsTwitter, BsYoutube } from "react-icons/bs";
import Contact_card from "../../components/Card/card-contact/Contact_card";

const Contact = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <Container fluid className="grid ">
          <CardGroup className="py-3 gap-3 g-row-3 d-flex justify-content-center">
            <Row className="gap-3">
              <Col>
                <Contact_card
                  link_ly3="https://discord.com/"
                  react_icon_ly3={<BsDiscord size="10rem" />}
                  card_title_ly3="Discord"
                  card_description_ly3="Help us improve our destiny"
                />
              </Col>
              <Col>
                <Contact_card
                  link_ly3="https://twitter.com/"
                  react_icon_ly3={<BsTwitter size="10rem" />}
                  card_title_ly3="Twitter"
                  card_description_ly3="Updates & Realises"
                />
              </Col>
              <Col>
                <Contact_card
                  link_ly3="https://youtube.com/"
                  react_icon_ly3={<BsYoutube size="10rem" />}
                  card_title_ly3="Youtube"
                  card_description_ly3="Trailers & Tutorials"
                />
              </Col>
              <Col>
                <Contact_card
                  link_ly3="https://gmail.com/"
                  react_icon_ly3={<BsMailbox size="10rem" />}
                  card_title_ly3="Mail"
                  card_description_ly3="Report Bugs"
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
