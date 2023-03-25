import React from "react";
import { Card, Button } from "react-bootstrap";

interface Props {
  card_header: string;
  card_title: string;
  card_description: string;
  card_footer: string;
}

const Card_Layout2 = ({
  card_header,
  card_description,
  card_footer,
  card_title
}: Props) => {
  return (
    <>
      <Card className="text-center rounded">
        <Card.Header style={{ background: "#2f3d4a" }} className="rounded m-1">
          {card_header}
        </Card.Header>
        <Card.Body className="my-3 text-start px-4">
          <Card.Title className="title_tips">{card_title}</Card.Title>
          <Card.Text>{card_description}</Card.Text>
          <Button className="py-1 px-3 mt-3">View</Button>
        </Card.Body>
        <Card.Footer className="footer_card_tips">{card_footer}</Card.Footer>
      </Card>
    </>
  );
};

export default Card_Layout2;
