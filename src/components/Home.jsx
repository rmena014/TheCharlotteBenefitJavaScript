import React, { useState, useEffect } from "react";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import "./Home.css";
import logoImage from "../images/TheCharlotteBenefit.webp";
import SignUp from "./SignUp";
import Footer from "./Footer";
import "./Footer.css";
import ContactForm from "./ContactForm";
import Login from "./Login";
import HamburgerMenu from "./HamburgerMenu";
import AboutUsInfo from "./AboutUsInfo";
import Slider from "./Slider";
import MissionStatementInfo from "./MissionStatementInfo";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const getStarted = () => {
    window.location.href = "/signup";
  };

  return (
    <nav>
      <HamburgerMenu />
      <div className="navbar-container ">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img className="nav-logo" src={logoImage} alt="Logo" />
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About Us
        </Link>

        <Link
          className="nav-link"
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Mission
        </Link>
        <Link
          className="nav-link"
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
        <Login />
      </div>
      <Element name="section1">
        <section className="section1">
          <h1 className="section-title">Empower.</h1>
          <p className="section1-text">
            Welcome to The Charlotte Benefit, the ultimate destination for
            adults looking to break into lucrative careers through alternate
            routes. We understand that the traditional path to success is not
            always feasible or desirable, and that's why we've created a
            platform that empowers you to take control of your career journey.
            Our app offers a wide range of resources, including videos,
            tutorials, and documentation, that will help you gain the skills and
            knowledge you need to succeed in today's competitive job market.
            Whether you're looking to transition into a new field or simply want
            to advance in your current one, our app is here to support you every
            step of the way. So why wait? Start exploring our vast library of
            resources and take the first step towards a brighter, more rewarding
            future today.
          </p>
          <Slider />
          <div>
            <SignUp />
            {/* <button
              className="bg-red-600 text-white rounded-lg py-2 px-4 transition duration-1000 ease-in-out hover:bg-red-500"
              onClick={() => getStarted()}
            >
              Get Started
            </button> */}
          </div>
        </section>
      </Element>
      <Element name="section2" data-aos="fade-right" data-aos-duration="1000">
        <section className="section2">
          <h1 className="section-title">How We Work.</h1>
          <p className="section2-text"></p>
          <AboutUsInfo />
        </section>
      </Element>
      <Element name="section3" data-aos="fade-left" data-aos-duration="1000">
        <section className="section3">
          <h1 className="section-title">Our Mission.</h1>
          <p className="section3-text">
            {/* Our mission is to empower and guide adults in their pursuit of
            career success through non-traditional paths. We strive to provide a
            comprehensive and supportive platform that offers a wide range of
            resources including tutorials, videos, and documentation. Our goal
            is to equip our users with the necessary knowledge, skills and tools
            to navigate today's competitive job market and achieve their
            professional aspirations, whether it's transitioning into a new
            field or advancing in their current one. We are dedicated to helping
            our users take control of their career journey and reach their full
            potential. */}
          </p>
          <MissionStatementInfo />
        </section>
      </Element>
      <Element name="section4" data-aos="fade-right" data-aos-duration="1000">
        <section className="section4">
          <h1 className="section-title">Contact Us.</h1>
          <p className="section4-text">
            We value your feedback and are here to assist you. Please fill out
            the form below and one of our team members will respond to your
            inquiry as soon as possible.
          </p>
          <ContactForm />
        </section>
      </Element>
      <Footer />
    </nav>
  );
};

AOS.init();

export default Home;
