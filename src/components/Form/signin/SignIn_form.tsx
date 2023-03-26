import React, { FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { Input, Label } from "reactstrap";

interface Props {
  imgUrl: string;
  name: string;
  description: string;
  link: string;
}

const SignIn_form: React.FC<Props> = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event: FormEvent<HTMLFormElement>): boolean => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
    }

    return formIsValid;
  };

  const loginSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (handleValidation(e)) {
      // Do something if form is valid
    } else {
      // Do something if form is invalid
    }
  };

  return (
    <>
      <Card className=" p-3 rounded-3 w-50 pt-5">
        <Row className="gap-3 mt-5">
          <Col lg={2}></Col>
          <Col>
            <h1 className="mb-3" style={{ color: "#4361ee" }}>
              LOGIN
            </h1>
            <Form
              id="loginform"
              onSubmit={loginSubmit}
              className="text-dark d-flex flex-column gap-3"
            >
              <Form.Group>
                <Input
                  type="text"
                  className="form-control text-dark py-2 px-3"
                  id="TextInput"
                  name="TextInput"
                  aria-describedby="textHelp"
                  placeholder="Username"
                  onChange={(event) => setEmail(event.target.value)}
                ></Input>
                <small id="textHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </Form.Group>
              <Form.Group>
                <Input
                  type="email"
                  className="form-control text-dark py-2 px-3"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                ></Input>
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </Form.Group>
              <Form.Group>
                <Input
                  type="password"
                  className="form-control text-dark py-2 px-3"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                ></Input>
                <small id="emailHelp" className="text-danger form-text">
                  {passwordError}
                </small>
              </Form.Group>
              <Container className="d-flex gap-3">
                <Link to={""}>
                  <Button type="submit" className="py-2 px-5 mt-3 btn">
                    Login
                  </Button>
                </Link>
                <Link to={""}>
                  <button
                    type="submit"
                    className="py-2 px-5 mt-3 btn-r rounded"
                    style={{
                      background: "transparent",
                      border: "1px solid $google !important"
                    }}
                  >
                    Register
                  </button>
                </Link>
              </Container>
            </Form>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Card>
    </>
  );
};

export default SignIn_form;
