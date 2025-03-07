import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import MainMenu from "../../components/MainMenu/MainMenu";
import BackButton from "../../components/BackButton/BackButton";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import SimpleImageSlider from "../../components/ImageSlider/SimpleImageSlider";

import { websiteData } from "../../data";

import laptop from "../../assets/images/pages/services/web/laptop.png";
import unnecessary from "../../assets/images/pages/services/web/unnecessary.png";
import umi from "../../assets/images/pages/services/web/umi.png";
import desiDharti from "../../assets/images/pages/services/web/desi_dharti.png";
import holyKicks from "../../assets/images/pages/services/web/holy_kicks.png";
import studioMason from "../../assets/images/pages/services/web/studio_mason.png";

import "./web.scss";

const Web = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".laptop", { opacity: 0, y: "-50%" });
      gsap.set(".website", {
        opacity: 0,
        scale: 0,
        rotate: -16,
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        position: "absolute",
      });

      const tl = gsap.timeline();

      tl.to(".laptop", {
        y: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power4.out",
      });

      const websitePositions = [
        { class: ".website-1", top: "57%", left: "40%" },
        { class: ".website-2", top: "42%", left: "50%" },
        { class: ".website-3", top: "33%", left: "35%" },
        { class: ".website-4", top: "19%", left: "60%" },
        { class: ".website-5", top: "45%", left: "65%" },
      ];

      websitePositions.forEach((pos, idx) => {
        tl.to(
          pos.class,
          {
            opacity: 1,
            scale: 0.8,
            top: pos.top,
            left: pos.left,
            duration: 0.8,
            ease: "back.out(1.1)",
          },
          "websites+=" + idx * 0.1
        );
      });

      const websites = document.querySelectorAll(".website");
      websites.forEach((website) => {
        website.addEventListener("mouseenter", () => {
          gsap.to(website, { scale: 0.85, duration: 0.3, ease: "power2.out", zIndex: 100 });
        });

        website.addEventListener("mouseleave", () => {
          gsap.to(website, { scale: 0.8, duration: 0.3, ease: "power2.out", zIndex: 2 });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="web-section" ref={sectionRef}>
      <MainMenu color="black" />
      <div className="back">
        <BackButton />
      </div>

      <h3>Web Design & Development</h3>

      <div className="laptop-container">
        <img src={laptop} className="laptop" alt="Laptop" />

        <img
          src={unnecessary}
          className="website website-1"
          alt="Unnecessary"
        />
        <img src={holyKicks} className="website website-2" alt="Holy Kicks"  />
        <img
          src={studioMason}
          className="website website-3"
          alt="Studio Mason"
        />
        <img src={desiDharti} className="website website-4" alt="Desi Dharti" />
        <img src={umi} className="website website-5" alt="Umi" style={{zIndex: "1"}} />
      </div>

      <div className="moving-text-container">
        <MarqueeSlider text="YOUR WEBSITE OUR DESIGN - " />
      </div>

      <h3>OTHER WEBSITES</h3>
      <div className="slider-container">
        <SimpleImageSlider websites={websiteData} clickable />
      </div>
    </section>
  );
};

export default Web;
