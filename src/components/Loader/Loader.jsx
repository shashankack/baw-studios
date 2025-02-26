import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.scss";

import monoGram1 from "../../assets/images/logo/monogram/monogram_m1.png";
import monoGram2 from "../../assets/images/logo/monogram/monogram_m2.png";

const Loader = ({ nextComponent }) => {
  const loaderContainerRef = useRef(null);
  const monogram1Ref = useRef(null);
  const monogram2Ref = useRef(null);
  const nextContentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      [monogram1Ref.current, monogram2Ref.current],
      { opacity: 0, scale: 1.3 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      }
    );

    tl.fromTo(
      monogram2Ref.current,
      { opacity: 0, scale: 1.3 },
      {
        rotation: -60,
        duration: 1,
        ease: "linear",
      },
      "<"
    );

    tl.to(loaderContainerRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      delay: 1,
    }).fromTo(
      nextContentRef.current,
      { y: "100%" },
      { y: "0%", duration: 1, ease: "power2.inOut" },
      "<"
    );
  }, []);

  return (
    <div className="loader-wrapper">
      <div className="loader-container" ref={loaderContainerRef}>
        <img
          ref={monogram1Ref}
          src={monoGram1}
          className="monogram-1"
          alt="BAW Monogram"
        />
        <img
          ref={monogram2Ref}
          src={monoGram2}
          className="monogram-2"
          alt="BAW Monogram"
        />
      </div>

      <div className="next-content-container" ref={nextContentRef}>
        {nextComponent}
      </div>
    </div>
  );
};

export default Loader;
