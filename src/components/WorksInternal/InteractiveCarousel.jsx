import React, { useRef, useLayoutEffect, useMemo } from "react";
import { gsap } from "gsap";
import "./InteractiveCarousel.scss";

// Helper function to shuffle an array using the Fisher-Yates algorithm.
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const InteractiveCarousel = ({
  data = [],
  direction = "bottom", // "top" | "bottom"
  scrollControl = "false", // "true" | "false"
  sliderHeight = "100%",
}) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const sliderTimeline = useRef(null);

  // Shuffle data once using useMemo so the order remains stable.
  const shuffledData = useMemo(() => shuffleArray(data), [data]);

  // Duplicate data for a seamless loop.
  const repeatedData = [...shuffledData, ...shuffledData];

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || repeatedData.length === 0) return;

    // Function to set up the GSAP animation.
    const setupAnimation = () => {
      // Kill any previous timeline.
      sliderTimeline.current?.kill();

      // Measure the total height of all repeated cards.
      const totalHeight = wrapper.scrollHeight;
      // The height of the original set of cards.
      const halfHeight = totalHeight / 2;

      // Create a GSAP timeline that repeats infinitely.
      sliderTimeline.current = gsap.timeline({
        repeat: -1,
        ease: "none",
      });

      // Define animation start and end points based on the direction prop.
      const fromY = direction === "bottom" ? 0 : -halfHeight;
      const toY = direction === "bottom" ? -halfHeight : 0;

      sliderTimeline.current.fromTo(
        wrapper,
        { y: fromY },
        { y: toY, duration: 20, ease: "none" }
      );
    };

    // Wait for all images inside the wrapper to load so that measurements are correct.
    const images = wrapper.querySelectorAll("img");
    let loadedImages = 0;
    const totalImages = images.length;

    const checkImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setupAnimation();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkImagesLoaded();
      } else {
        img.addEventListener("load", checkImagesLoaded);
        img.addEventListener("error", checkImagesLoaded);
      }
    });

    // If there are no images, set up immediately.
    if (totalImages === 0) {
      setupAnimation();
    }

    // If scrollControl is enabled, adjust the timeline's timeScale based on window scroll.
    let scrollHandler;
    if (scrollControl === "true") {
      scrollHandler = () => {
        const scrollY = window.scrollY;
        const newTimeScale = 1 + scrollY / 1000;
        sliderTimeline.current && sliderTimeline.current.timeScale(newTimeScale);
      };
      window.addEventListener("scroll", scrollHandler);
    }

    return () => {
      sliderTimeline.current?.kill();
      if (scrollHandler) {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, [direction, scrollControl, repeatedData]);

  // Pause animation on hover; resume on mouse leave.
  const handleMouseEnter = () => {
    sliderTimeline.current?.pause();
  };

  const handleMouseLeave = () => {
    sliderTimeline.current?.resume();
  };

  // Handle card click to navigate to the redirect link.
  const handleCardClick = (redirect) => {
    window.open(redirect, "_blank");
  };

  return (
    <div
      className="endless-image-slider"
      style={{ height: sliderHeight }}
      ref={containerRef}
    >
      <div
        className="slider-wrapper"
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {repeatedData.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="slider-card"
            onClick={() => handleCardClick(item.redirect)}
          >
            <img src={item.image} alt={`brand-${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveCarousel;
