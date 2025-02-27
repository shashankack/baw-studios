import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./home.scss";

import monogram1 from "../../assets/images/logo/monogram/monogram_m1.png";
import monogram2 from "../../assets/images/logo/monogram/monogram_m2.png";
import landingPageVid from "../../assets/videos/tv_landing_video.mp4";
import logoShow from "../../assets/videos/tv_logo_show.mp4";

import MainMenu from "../../components/MainMenu/MainMenu";

const Home = () => {
  const monogram1Ref = useRef(null);
  const monogram2Ref = useRef(null);
  const loaderContainerRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true); // Track if loader should be shown

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    console.log("SessionStorage check:", hasVisited);

    if (!hasVisited) {
      // Play animation if visiting for the first time
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        delay: 0.5,
        onComplete: () => {
          document.body.style.overflow = "auto";
          sessionStorage.setItem("hasVisited", "true"); // Set session flag **after animation**
          setShowLoader(false); // Hide loader after animation
        },
      });

      tl.fromTo(
        [monogram1Ref.current, monogram2Ref.current],
        { opacity: 0, scale: 1.3 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.3,
          stagger: 0.2,
          ease: "power2.inOut",
        }
      ).fromTo(
        monogram2Ref.current,
        { opacity: 0, scale: 1.3 },
        {
          rotation: -60,
          duration: 1.3,
          ease: "linear",
        },
        "<"
      );

      tl.to(loaderContainerRef.current, {
        yPercent: -100,
        duration: 1.3,
        ease: "power2.inOut",
      });

      console.log("Animation triggered");
    } else {
      // If sessionStorage is set, remove loader immediately
      console.log("Skipping animation");
      setShowLoader(false);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="home-wrapper">
      {showLoader && (
        <div ref={loaderContainerRef} className="loader-container">
          <img
            ref={monogram1Ref}
            src={monogram1}
            className="monogram-1"
            alt="BAW Monogram"
          />
          <img
            ref={monogram2Ref}
            src={monogram2}
            className="monogram-2"
            alt="BAW Monogram"
          />
        </div>
      )}

      <section className="video-container">
        <video src={landingPageVid} className="landing-video" autoPlay muted />
      </section>

      <section className="next-video">
        <video src={logoShow} className="logo-show" autoPlay muted loop />
        <div className="extra-text">
          <h2>
            We are a creative studio based in Bengaluru, specializing in design,
            motion, web, and social.
          </h2>
          <p>
            Our phenomenal team known for innovation and quality, have completed
            work for
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
