import React from "react";
import Card_layout from "../../../components/Card/Card_layout";
import CardGroup from "react-bootstrap/esm/CardGroup";

const LibraryMain = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <CardGroup className="gap-5">
                <Card_layout
                  imgUrl="/src/assets/images/junior-academy.jpg"
                  name="Junior Academy"
                  description="This is Junior Academy"
                  link="/library/junior-academy"
                />
                <Card_layout
                  imgUrl="/src/assets/images/senior-academy.jpg"
                  name="Senior Academy"
                  description="This is a Senior Academy"
                  link="/library/senior-academy"
                />
                <Card_layout
                  imgUrl="/src/assets/images/tips-tricks.jpg"
                  name="Tips & Tricks"
                  description="These are Tips & Tricks"
                  link="/library/tips-tricks"
                />
                <Card_layout
                  imgUrl="/src/assets/images/challenges.jpg"
                  name="Challenges"
                  description="These are Challenges"
                  link="/library/test-challenges"
                />
              </CardGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LibraryMain;
