import React from "react";
import { Container } from "reactstrap";
import SignIn_form from "../../components/Form/signin/SignIn_form";

const SingIn = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <Container fluid>
          <SignIn_form
            imgUrl="/src/assets/images/advanced-field.jpg"
            name="Junior Academy"
            description="This is Junior Academy"
            link="/library/junior-academy"
          />
        </Container>
      </section>
    </>
  );
};

export default SingIn;
