import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  imgUrl: string;
  name: string;
  description: string;
  link: string;
}

const Card_layout = ({ imgUrl, name, description, link }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const hadleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <Card
        style={{
          width: "15rem",
          maxHeight: "45rem",
          backdropFilter: "blur(10px)"
        }}
        className="bg-danger p-3 rounded-3"
      >
        <Card.Img
          variant="top"
          src={imgUrl}
          className={`rounded image ${
            isImageLoaded ? "image-visible" : "image-hidden"
          }`}
          onLoad={hadleImageLoaded}
          style={{
            maxInlineSize: "100%",
            blockSize: "auto",
            width: "100%",
            height: "50%",
            objectFit: "cover",
            position: "relative",
            overflow: "hidden"
          }}
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
