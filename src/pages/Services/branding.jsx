import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StackingImages from "../../components/StackingImages/StackingImages";
import { brandingData } from "../../data";

import BackButton from "../../components/BackButton/BackButton";

import "./branding.scss";

gsap.registerPlugin(ScrollTrigger);

const Branding = () => {
  const [active, setActive] = useState(brandingData.brandingElements[0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="branding-section" ref={sectionRef}>
      <div className="back">
        <BackButton />
      </div>
      <h2>BRANDING</h2>
      <div className="stack-container">
        <StackingImages
          images={brandingData.images}
          paragraph={brandingData.paragraph}
        />
      </div>
      <div className="content">
        <h3>
          Explore the fundamental components that shape and define a brand's
          identity, ensuring consistency and distinction in the market.
        </h3>
      </div>

      <div className="elements-container">
        <div className="left">
          {brandingData.brandingElements.map((element, index) => (
            <h3
              key={`element-${index}`}
              className={`element ${active === element ? "active" : ""}`}
              onMouseOver={() => setActive(element)}
            >
              {element.title}
            </h3>
          ))}
        </div>
        <div className="right">
          <p>{active.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Branding;
