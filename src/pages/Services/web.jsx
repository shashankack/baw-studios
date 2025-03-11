import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";

import MainMenu from "../../components/MainMenu/MainMenu";
import BackButton from "../../components/BackButton/BackButton";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import SimpleImageSlider from "../../components/ImageSlider/SimpleImageSlider";

import { websiteData } from "../../data";

import laptop from "../../assets/images/pages/services/web/laptop.png";

import "./web.scss";

const Web = () => {
  const sectionRef = useRef(null);
  const laptopContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile based on touch support.
  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsMobile(true);
    }
  }, []);

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
          gsap.to(website, {
            scale: 0.85,
            duration: 0.3,
            ease: "power2.out",
            zIndex: 100,
          });
        });

        website.addEventListener("mouseleave", () => {
          gsap.to(website, {
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out",
            zIndex: 2,
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Mouse event handlers for desktop.
  const handleMouseMove = useCallback((e) => {
    const rect = laptopContainerRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;

    const rotationY = xPos * 20;
    const rotationX = yPos * -20;

    gsap.to(laptopContainerRef.current, {
      rotationY,
      rotationX,
      transformPerspective: 800,
      transformOrigin: "center",
      duration: 0.4,
      ease: "power3.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(laptopContainerRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  // Device orientation handler for mobile.
  useEffect(() => {
    if (isMobile && window.DeviceOrientationEvent) {
      const handleOrientation = (event) => {
        // event.gamma is left-to-right tilt, event.beta is front-to-back.
        // We scale these values so the rotation approximates our mouse-based effect.
        const rotationY = event.gamma * (20 / 30); // adjust as needed
        const rotationX = -event.beta * (20 / 30);
        gsap.to(laptopContainerRef.current, {
          rotationY,
          rotationX,
          transformPerspective: 800,
          transformOrigin: "center",
          duration: 0.4,
          ease: "power3.out",
        });
      };

      window.addEventListener("deviceorientation", handleOrientation, true);
      return () => {
        window.removeEventListener("deviceorientation", handleOrientation, true);
      };
    }
  }, [isMobile]);

  const handleRedirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="web-section" ref={sectionRef}>
      <MainMenu color="black" />
      <div className="back">
        <BackButton />
      </div>

      <h3>Web Design & Development</h3>

      <div
        className="laptop-container"
        ref={laptopContainerRef}
        // Attach mouse events only on non-mobile devices.
        {...(!isMobile && {
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
        })}
      >
        <img src={laptop} className="laptop" alt="Laptop" />
        {websiteData.map((website) => (
          <img
            key={website.id}
            src={website.thumbnail}
            className={`website website-${website.id}`}
            alt={website.title}
            onClick={() => handleRedirect(website.redirect)}
          />
        ))}
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
