import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";

interface Props {
  imgUrl: string;
  name: string;
  description: string;
  link: string;
}

const Card_main = ({ imgUrl, name, description, link }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const hadleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <Card className=" p-3 rounded-3 w-100">
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
            height: "60%",
            objectFit: "cover",
            position: "relative",
            overflow: "hidden"
          }}
        />
        <Card.Body className="mx-2 d-flex flex-column justify-content-between">
          <Container>
            <Card.Title className="my-3">{name}</Card.Title>
            <Card.Text className="mb-3">{description}</Card.Text>
          </Container>
          <Container>
            <Link to={link}>
              <Button className="py-2 px-3 mb-2">Enter Library</Button>
            </Link>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card_main;
