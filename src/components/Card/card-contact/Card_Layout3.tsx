import React, { ReactElement, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  card_description_ly3: string;
  card_title_ly3: string;
  link_ly3: string;
  react_icon_ly3: ReactElement;
}

const Card_Layout3 = ({
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
          className="mb-2 rounded p-3 text-center"
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

export default Card_Layout3;
