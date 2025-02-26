import { useState } from "react";
import "./MainMenu.scss"; // <--- Make sure to import your SCSS

import logo from "../../assets/images/logo/logo.png";
import hamburger from "../../assets/images/icons/hamburger.png";
import blueAmp from "../../assets/images/icons/blue-amp.png";

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="main-menu-container">
      <img src={logo} alt="BAW Studios Logo" className="logo" />

      <div className="menu-icon" onClick={handleMenuToggle}>
        <img className="hamburger" src={hamburger} alt="Hamburger Icon" />
        <img className="blueAmp" src={blueAmp} alt="Blue Ampersand Icon" />
      </div>

      <div className={`main-menu ${isMenuOpen ? "open" : ""}`}>
        <h1>LOL</h1>
      </div>
    </div>
  );
};

export default MainMenu;
