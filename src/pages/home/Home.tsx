import React from "react";
// import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <>
        <section className="home-hero py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <div className="main-banner mt-5">
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
              </div>
              <div className="col-6">
                <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                  <div className="small-banner"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Home;
