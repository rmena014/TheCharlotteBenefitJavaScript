import React, { useState } from "react";
import "./SideNav.css";
import logoimage from "../images/TheCharlotteBenefit.webp";
import {
  AiOutlineUser,
  AiOutlineCopy,
  AiOutlineDesktop,
  AiOutlineFileSearch,
  AiOutlineCode,
  AiOutlineLogout,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  const [isExpanded, setExpandState] = useState(false);
  const menuItems = [
    {
      text: "Profile",
      icon: <AiOutlineUser />,
      link: "/profile",
    },
    {
      text: "Resources",
      icon: <AiOutlineCopy />,
      link: "/profile/resources",
    },
    {
      text: "Courses",
      icon: <AiOutlineDesktop />,
      link: "/profile/courses",
    },
    {
      text: "Practice (Beta)",
      icon: <AiOutlineCode />,
      link: "/profile/practice",
    },
  ];
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src={logoimage} alt="logo"></img>
              <h2>TCB</h2>
            </div>
          )}
          <button
            className={
              isExpanded
                ? "hamburger2 hamburger2-in"
                : "hamburger2 hamburger2-out"
            }
            onClick={() => setExpandState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon, link }, index) => (
            <a
              href={link}
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              key={index}
              onClick={() => setExpandState(false)}
            >
              <div className="icon-class">{icon}</div>
              {isExpanded && <p>{text}</p>}
              {isExpanded && <div className="tooltip">{text}</div>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        <div className="nav-detais">
          <div className="navIcon">
            <div className="navInfo"></div>
          </div>
        </div>
        <div className="navLogout">
          <Link to="/home">
            <AiOutlineLogout className="logout-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
