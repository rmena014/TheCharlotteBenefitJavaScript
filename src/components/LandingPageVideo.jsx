import React from "react";
import videoBG from "../assets/videoBG.mp4";
import "./LandingPageVideo.css";
import { Link } from "react-router-dom";
import logoImage from "../images/TheCharlotteBenefit.webp";

const LandingPageVideo = () => {
  return (
    <div classname="main">
      <div className="overlay">
        <video src={videoBG} autoPlay loop muted />
      </div>
      {/* <img className="cb-logo" src={logoImage} /> */}
      <div className="content">
        <Link to="/home">
          <button className="site-button">Enter the Charlotte Benefit</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageVideo;
