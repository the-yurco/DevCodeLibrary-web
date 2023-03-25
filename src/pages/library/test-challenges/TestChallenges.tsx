import React from "react";
import Card_layout from "../../../components/Card/Card_layout";
import { CardGroup } from "react-bootstrap";

const TestChallenges = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <CardGroup className="gap-5">
                <Card_layout
                  imgUrl="/src/assets/images/quiz.jpg"
                  name="Quizes"
                  description="These are Quizes"
                  link="/junior-academy/quizes"
                />
                <Card_layout
                  imgUrl="/src/assets/images/problem.jpg"
                  name="Problems"
                  description="These are Problems"
                  link="/senior-academy/problems"
                />
                <Card_layout
                  imgUrl="/src/assets/images/projects.jpg"
                  name="Projects"
                  description="These are Projects"
                  link="/tips-tricks/projects"
                />
                <Card_layout
                  imgUrl="/src/assets/images/challenges2.jpg"
                  name="Challenges"
                  description="These are Challenges"
                  link="/test-challenges/challenges"
                />
              </CardGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestChallenges;
