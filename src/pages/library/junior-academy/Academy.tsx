import React from "react";
import Card_layout from "../../../components/Card/Card_layout";
import CardGroup from "react-bootstrap/esm/CardGroup";

const Academy = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <CardGroup className="gap-5">
                <Card_layout
                  imgUrl="/src/assets/images/kids-field.jpg"
                  name="Kids Field"
                  description="This is Kids Field "
                  link="/junior-academy/kids-field"
                />
                <Card_layout
                  imgUrl="/src/assets/images/student-field.jpg"
                  name="Student Field"
                  description="This is Student Field"
                  link="/junior-academy/student-field"
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
