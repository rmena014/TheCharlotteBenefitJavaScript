import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiFillInfoCircle,
  AiTwotoneTrophy,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-scroll";
import "./HamburgerMenu.css";
import Login from "./Login";
// import logoImage from "../images/TheCharlotteBenefit.webp";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu ">
      <AiOutlineMenu
        size={30}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
        className="hamburger-icon"
      />
      {isOpen && (
        <ul className={`menu-list ${isOpen ? "is-open" : ""}`}>
          <li className="menu-item2">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home <AiFillHome className="icon" />
            </Link>
          </li>
          <li className="menu-item2">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              About <AiFillInfoCircle className="icon" />
            </Link>
          </li>
          <li className="menu-item2">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Mission <AiTwotoneTrophy className="icon" />
            </Link>
          </li>
          <li className="menu-item2">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact <AiOutlineMail className="icon" />
            </Link>
            <Login />
          </li>
        </ul>
      )}
    </div>
  );
}

export default HamburgerMenu;
