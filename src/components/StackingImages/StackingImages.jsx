import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import "./StackingImages.scss";

gsap.registerPlugin(ScrollTrigger);

const StackingImages = ({ images }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return; // Prevent errors if no images are passed

    const elements = gsap.utils.toArray(".branding-image");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });

    elements.forEach((el, index) => {
      const randomRotation = Math.random() * 5 - 5; // Random rotation between -15° and 15°

      tl.set(el, { zIndex: index + 10 }) // Ensure the new image is on top before animation starts
        .fromTo(
          el,
          { opacity: 0, scale: 3 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
        )
        .to(el, { rotation: randomRotation }, "-=0.5");
    });
  }, [images]); // Re-run animation if images change

  return (
    <div ref={containerRef} className="branding-container">
      <div className="branding-stack">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`branding-img-${index}`}
            className="branding-image"
          />
        ))}
      </div>
    </div>
  );
};

StackingImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StackingImages;
