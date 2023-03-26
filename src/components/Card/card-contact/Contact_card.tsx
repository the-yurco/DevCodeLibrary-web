import { ReactElement } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  card_description_ly3: string;
  card_title_ly3: string;
  link_ly3: string;
  react_icon_ly3: ReactElement;
}

const Contact_card = ({
  card_description_ly3,
  card_title_ly3,
  link_ly3,
  react_icon_ly3
}: Props) => {
  return (
    <>
      <Link to={link_ly3}>
        <Card
          style={{ width: "18rem" }}
          className="mb-2 rounded p-3 py-5 text-center h-100"
        >
          <Container>{react_icon_ly3}</Container>
          <Card.Body>
            <Card.Title className="mt-3">{card_title_ly3} </Card.Title>
            <Card.Text>{card_description_ly3}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Contact_card;
