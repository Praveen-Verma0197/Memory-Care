import React from "react";
import { Link } from "react-router-dom";
import signInImage from "../images/landing_bg.jpeg";
import "../style.css";

export const Homepage = () => {
  return (
    <>
      <div className="bg-blue-600">
        <nav className="px-4 bg-blue-600">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link to="/homepage" className="flex items-center link">
              <span
                className="self-center text-2xl font-semibold whitespace-nowrap text-white"
                style={{ letterSpacing: "4px" }}
              >
                CARIFY
              </span>
            </Link>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col justify-center items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 text-lg rounded md:bg-transparent md:p-0 link"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 pr-4 pl-3 text-lg text-gray-300 hover:text-gray-100 hover:font-medium transition link"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/sign-in"}>
                    <button className="bg-gray-100 text-blue-800 text-lg font-medium px-8 py-1 rounded-md w-full hover:shadow-lg hover:scale-105 ease-in transform transition-all ">
                      Sign in
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid" style={{}}>
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12">
            <div
              className="row"
              style={{
                backgroundImage: "url(" + signInImage + ")",
                backgroundSize: "stretch",
                height: "500px",
                overflow: "hidden",
              }}
            >
              <div
                className="col-lg-12 col-xl-12"
                style={{ margin: "150px 50px 50px 50px", color: "white" }}
              >
                <h1>One stop solution to Demantia</h1>
                <h3>
                  Now take care of your patient
                  <br /> more smartly{" "}
                </h3>
                <Link
                  to="#services"
                  className="btn-get-started scrollto"
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn btn-success">Get Started</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <section id="links" className="links">
        <div className="container">
          <div className="row" style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "10px" }}>
              <h2 style={{ color: "#2563EB" }}>Our Roles</h2>
              <hr
                style={{
                  border: "2px solid #2563EB",
                  width: "100px",
                  marginLeft: "46%",
                  borderRadius: "5px",
                }}
              />
            </div>

            <div className="col-md-6 col-lg-3 d-flex  mb-5 mb-lg-0 ">
              <div className="icon-box ">
                <div className="icon">
                  <i className="fa fa-user-doctor"></i>
                </div>
                <h4 className="title">
                  <Link to="android-applications.html" className="link">
                    Doctor
                  </Link>
                </h4>
                <p className="description">
                  Android is open-source software created by a consortium of
                  developers – the Open Handset Alliance. It is licensed under
                  the Apache License and is sponsored by Google.{" "}
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex  mb-5 mb-lg-0 serviceSection">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-child"></i>
                </div>
                <h4 className="title">
                  <Link to="websites.html" className="link">
                    Care Taker
                  </Link>
                </h4>
                <p className="description">
                  With web development taking off rapidly in the industry, web
                  development has emerged as a promising field right now,
                  attracting aspirants from professionals background!
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex  mb-5 mb-lg-0 serviceSection">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-bed-pulse"></i>
                </div>
                <h4 className="title">
                  <Link to="windows-applications.html" className="link">
                    Patient
                  </Link>
                </h4>
                <p className="description">
                  In the present industry, if you wish to land a promising job
                  in the field of Software Development, you must have a few
                  software development projects under your belt!
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex  mb-5 mb-lg-0 serviceSection">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-house"></i>
                </div>
                <h4 className="title">
                  <Link to="arduino-based.html" className="link">
                    Family Member
                  </Link>
                </h4>
                <p className="description">
                  The Arduino microcontroller has a nearly limitless array of
                  innovative applications for everything from robotics and
                  lighting, to games and gardening!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />

      <section
        id="services"
        class="services section-bg "
        style={{ backgroundColor: "blue" }}
      >
        <div class="container" data-aos="fade-up">
          <div
            class="section-title"
            style={{ color: "white", textAlign: "center" }}
          >
            <h2>Our Features</h2>
            <p>A customer is the most important visitor on our premises!</p>
          </div>

          <div class="row">
            <div class="col-md-6 featureSection">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i class="icofont-brand-android-robot"></i>
                <h4>Monitoring patient with doctor dashboard</h4>
                <p>
                  Transform your idea into a full-fledged Android Application!
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0 featureSection">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <i class="icofont-brand-apple"></i>
                <h4>Solve games to check the brain power</h4>
                <p>Transform your idea into a full-fledged iOS Application!</p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0 featureSection">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <i class="icofont-android-nexus"></i>
                <h4>Manage Diet smartly</h4>
                <p>
                  Transform your idea into a full-fledged Flutter Application!
                </p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0 featureSection">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="500">
                <i class="icofont-web"></i>
                <h4>Manage Madicine smartly</h4>
                <p>Transform your idea into a full-fledged Web Application!</p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0 featureSection">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="600">
                <i class="icofont-micro-chip"></i>
                <h4>Get random joke to stimulate your mind</h4>
                <p>Transform your idea into a full-fledged Arduino Project!</p>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>

      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="#">Web design</Link>
                  </li>
                  <li>
                    <Link to="#">Development</Link>
                  </li>
                  <li>
                    <Link to="#">Hosting</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <Link to="#">Company</Link>
                  </li>
                  <li>
                    <Link to="#">Team</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div className="col item social">
                <Link to="#">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-snapchat"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram"></i>
                </Link>
              </div>
            </div>
            <p className="copyright">Company Name © 2018</p>
          </div>
        </footer>
      </div>
    </>
  );
};
