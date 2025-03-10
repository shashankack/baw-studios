import React, { useRef, useEffect, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import "./Test.scss";

// Register the ScrollToPlugin with GSAP.
gsap.registerPlugin(ScrollToPlugin);

// Calculate responsive cell dimensions based on window width/height.
const getResponsiveDimensions = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let cellWidth, cellHeight;

  if (width >= 1024) {
    // Desktop: large screens
    cellWidth = 450;
    cellHeight = 600;
  } else if (width >= 768) {
    // Medium screens
    cellWidth = 400;
    cellHeight = Math.round(400 * (600 / 450)); // ~533
  } else if (width >= 500) {
    // Small screens (but not very small)
    cellWidth = 350;
    cellHeight = Math.round(350 * (600 / 450)); // ~467
  } else {
    // Under 500px: adjust for orientation
    if (width < height) {
      // Portrait
      cellWidth = 300;
      cellHeight = Math.round(300 * (600 / 450)); // ~400
    } else {
      // Landscape
      cellWidth = 400;
      cellHeight = 300; // swapped dimensions for landscape look
    }
  }
  return { cellWidth, cellHeight };
};

const Test = ({ data }) => {
  // Define the gap between cards.
  const GAP = 15;

  // State for responsive cell dimensions and window size.
  const [dimensions, setDimensions] = useState(getResponsiveDimensions());
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const columns = 10000;
  const rows = 10000;
  const containerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const lastScrollLeft = useRef(0);

  // Update dimensions and window size on resize.
  useEffect(() => {
    const handleResize = () => {
      setDimensions(getResponsiveDimensions());
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Center the scroll position on mount or when window size/dimensions change.
  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight, scrollWidth, scrollHeight } =
        containerRef.current;
      const centerX = (scrollWidth - clientWidth) / 2;
      const centerY = (scrollHeight - clientHeight) / 2;
      containerRef.current.scrollLeft = centerX;
      containerRef.current.scrollTop = centerY;
      lastScrollLeft.current = centerX;
      lastScrollTop.current = centerY;
    }
  }, [windowSize, dimensions]);

  // Handle scroll: animate card width based on vertical scroll speed and image height based on horizontal scroll.
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    // --- Vertical Scroll Animation (Shrink card width) ---
    const scrollTop = container.scrollTop;
    const deltaY = Math.abs(scrollTop - lastScrollTop.current);
    const newScaleX = 1 - Math.min(deltaY / 300, 0.07);
    gsap.to(".gallery-card", {
      scaleX: newScaleX,
      duration: 0.1,
      ease: "power1.out",
    });
    clearTimeout(handleScroll.resetTimeout);
    handleScroll.resetTimeout = setTimeout(() => {
      gsap.to(".gallery-card", {
        scaleX: 1,
        duration: 0.2,
        ease: "power1.out",
      });
    }, 150);
    lastScrollTop.current = scrollTop;

    // --- Horizontal Scroll Animation (Shrink image height) ---
    const currentScrollLeft = container.scrollLeft;
    const deltaX = Math.abs(currentScrollLeft - lastScrollLeft.current);
    const newScaleY = 1 - Math.min(deltaX / 300, 0.03);
    gsap.to(".gallery-img", {
      scaleY: newScaleY,
      duration: 0.1,
      ease: "power1.out",
    });
    clearTimeout(handleScroll.resetTimeoutHorizontal);
    handleScroll.resetTimeoutHorizontal = setTimeout(() => {
      gsap.to(".gallery-img", {
        scaleY: 1,
        duration: 0.2,
        ease: "power1.out",
      });
    }, 150);
    lastScrollLeft.current = currentScrollLeft;

    // --- Existing recenter logic ---
    const thresholdX = dimensions.cellWidth * 20;
    const thresholdY = dimensions.cellHeight * 20;

    if (
      currentScrollLeft < thresholdX ||
      currentScrollLeft >
        container.scrollWidth - container.clientWidth - thresholdX
    ) {
      const centerX = (container.scrollWidth - container.clientWidth) / 2;
      gsap.to(container, {
        duration: 0.5,
        scrollTo: { x: centerX },
        ease: "power2.inOut",
      });
      lastScrollLeft.current = centerX;
    }
    if (
      scrollTop < thresholdY ||
      scrollTop >
        container.scrollHeight - container.clientHeight - thresholdY
    ) {
      const centerY = (container.scrollHeight - container.clientHeight) / 2;
      gsap.to(container, {
        duration: 0.5,
        scrollTo: { y: centerY },
        ease: "power2.inOut",
      });
      lastScrollTop.current = centerY;
    }
  };

  // Render a cell, wrapping content to simulate a 15px gap.
  const renderCell = ({ columnIndex, rowIndex, style }) => {
    // Adjust style: our grid cell is now larger by GAP pixels.
    const adjustedStyle = { ...style };

    // Calculate index for the data.
    const index =
      (((rowIndex * columns + columnIndex) % data.length) + data.length) %
      data.length;
    const item = data[index];

    return (
      // The outer div uses the provided style.
      <div style={adjustedStyle}>
        {/* Inner wrapper adds half the GAP as margin on all sides */}
        <div
          style={{
            margin: GAP / 2,
            width: "100%",
            height: "100%",
          }}
        >
          {/* The card itself fills the inner container */}
          <div className="gallery-card" style={{ width: "100%", height: "100%" }}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="gallery-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Grid
      columnCount={columns}
      rowCount={rows}
      
      columnWidth={dimensions.cellWidth + GAP}
      rowHeight={dimensions.cellHeight + GAP}
      height={windowSize.height}
      width={windowSize.width}
      className="gallery-grid"
      outerRef={containerRef}
      onScroll={handleScroll}
    >
      {renderCell}
    </Grid>
  );
};

export default Test;
