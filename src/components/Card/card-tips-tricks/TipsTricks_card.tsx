import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  card_header: string;
  card_title: string;
  card_description: string;
  card_footer: string;
  link: string;
}

const TipsTricks_card = ({
  card_header,
  card_description,
  card_footer,
  card_title,
  link
}: Props) => {
  return (
    <>
      <Card className="text-center rounded tips-card">
        <Card.Header
          // style={{ background: "#2f3d4a", color: "#6102dd" }}
          className="mx-5 l2-header rounded my-1"
        >
          {card_header}
        </Card.Header>
        <Card.Body className="my-3 text-start px-4">
          <Card.Title className="title_tips mb-3">{card_title}</Card.Title>
          <Card.Text>{card_description}</Card.Text>
          <Link to={link}>
            <Button className="btn_tips py-1 px-4 mt-3">View</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="footer_card_tips rounded m-1 py-1">
          {card_footer}
        </Card.Footer>
      </Card>
    </>
  );
};

export default TipsTricks_card;
