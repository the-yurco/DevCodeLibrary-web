import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

interface Props {
  imgUrl: string;
  name: string;
  description: string;
  link: string;
}

const Card_layout = ({ imgUrl, name, description, link }: Props) => {
  return (
    <>
      <Card style={{ width: "15rem" }} className="bg-danger p-2 rounded">
        <Card.Img
          variant="top"
          src={imgUrl}
          className="rounded-top"
          style={{ height: "15rem" }}
        />
        <Card.Body className="mx-2">
          <Card.Title className="my-3">{name}</Card.Title>
          <Card.Text className="mb-3">{description}</Card.Text>
          <Link to={link}>
            <Button className="py-2 px-3 mb-2">Enter Library</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card_layout;
