import React from "react";
import monogram1 from "../../assets/images/logo/monogram/monogram_m1.png";
import monogram2 from "../../assets/images/logo/monogram/monogram_m2.png";
import "./Loader.scss";
import gsap from "gsap";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={monogram1} alt="" className="monogram1" />
      <img src={monogram2} alt="" className="monogram2" />
    </div>
  );
};

export default Loader;
