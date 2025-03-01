import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { FaChevronUp } from "react-icons/fa";
import "./MainMenu.scss";

import logo from "../../assets/images/logo/logo.png";
import hamburger from "../../assets/images/icons/hamburger.png";
import blueAmp from "../../assets/images/icons/blue_amp.png";
import whiteAmp from "../../assets/images/icons/white_amp.png";
import monogram from "../../assets/images/logo/monogram/monogram_m2.png";

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const nav = useNavigate();

  const monogramRef = useRef(null);

  useEffect(() => {
    gsap.to(monogramRef.current, {
      rotation: 360,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const handleRedirect = (path) => {
    nav(path);
    setIsMenuOpen(false);
    setIsServicesMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
    setIsServicesMenuOpen(false);
  };

  const getMenuIcon = () => {
    if (isMenuOpen) {
      return isHovered ? blueAmp : whiteAmp;
    } else {
      return isHovered ? blueAmp : hamburger;
    }
  };

  const openServicesMenu = () => {
    setIsServicesMenuOpen(true);
  };

  const closeServicesMenu = () => {
    setIsServicesMenuOpen(false);
  };

  return (
    <div className="main-menu-container">
      <img
        src={logo}
        alt="BAW Studios Logo"
        className="logo"
        onClick={() => handleRedirect("/")}
      />

      <div
        className="menu-icon"
        onClick={handleMenuToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={getMenuIcon()} alt="Menu Icon" />
      </div>

      {/* Main Menu */}
      <div
        className={`main-menu ${isMenuOpen ? "open" : ""} ${
          isServicesMenuOpen ? "slide-up" : ""
        }`}
      >
        <img
          src={monogram}
          alt="Monogram"
          ref={monogramRef}
          className="monogram"
        />

        <ul>
          <li>
            <button onClick={() => handleRedirect("/about")}>ABOUT</button>
          </li>
          <li>
            <button onClick={openServicesMenu}>SERVICES</button>
          </li>
          <li>
            <button onClick={() => handleRedirect("/works")}>WORKS</button>
          </li>
          <li>
            <button onClick={() => handleRedirect("/contact")}>CONTACT</button>
          </li>
        </ul>
      </div>

      {/* Services Menu */}
      <div className={`services-menu ${isServicesMenuOpen ? "open" : ""}`}>
        <div className="services-menu-container">
          <button className="close-services" onClick={closeServicesMenu}>
            <FaChevronUp size={24} />
          </button>

          <h2>Services</h2>

          <div className="glow-text">
            <p>WHAT ARE YOU LOOKING FOR?</p>
          </div>

          <ul>
            <li>
              <button onClick={() => handleRedirect("/services/branding")}>
                BRANDING
              </button>
            </li>
            <li>
              <button onClick={() => handleRedirect("/services/web")}>
                WEB
              </button>
            </li>
            <li>
              <button onClick={() => handleRedirect("/services/social")}>
                SOCIAL
              </button>
            </li>
            <li>
              <button onClick={() => handleRedirect("/services/production")}>
                PRODUCTION
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
