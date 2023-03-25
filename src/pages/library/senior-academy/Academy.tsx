import React from "react";
import { CardGroup } from "react-bootstrap";
import Card_layout from "../../../components/Card/Card_layout";

const Academy = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <CardGroup className="gap-5">
                <Card_layout
                  imgUrl="/src/assets/images/starter-field.jpg"
                  name="Starter Field"
                  description="This is a Starter Field"
                  link="/senior-academy/starter-field"
                />
                <Card_layout
                  imgUrl="/src/assets/images/intermediate-field.jpg"
                  name="Intermediate Field"
                  description="This is an Intermediate Field"
                  link="/senior-academy/intermediate-field"
                />
                <Card_layout
                  imgUrl="/src/assets/images/advanced-field.jpg"
                  name="Advanced Field"
                  description="This is an Advanced Field"
                  link="/senior-academy/advanced-field"
                />
              </CardGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academy;
