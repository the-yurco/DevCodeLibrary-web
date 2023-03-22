import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
// import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <section className="home-hero py-5 mt-5">
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-6 pe-4">
              <div className="main-banner mt-3">
                <div>
                  <h1>Learn Fast and Effectivelly</h1>
                  <br />
                  <h1>
                    We are library of everything you need for coding{" "}
                    <span className="px-2">FREE</span>
                  </h1>
                  <br />
                  <br />
                  <h4>Discover Everything you need to know...</h4>
                </div>
                <a
                  href="#"
                  className="btn btn-primary py-2 mt-5 d-flex align-items-center justify-content-center w-25 gap-2"
                >
                  <BsFillPlayFill /> Watch Trailer
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center ">
                <div className="small-banner">
                  <img
                    src="src/assets/images/2211.w026.n002.2759B.p1.2759.jpg"
                    alt=""
                    height={480}
                    className="rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
