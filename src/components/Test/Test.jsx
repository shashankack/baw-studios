import React, { useRef, useEffect, useState, useCallback } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import "./Test.scss";

gsap.registerPlugin(ScrollToPlugin);

// Fisher-Yates shuffle to randomize the entire data array.
function randomizeData(data) {
  const randomized = [...data];
  for (let i = randomized.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomized[i], randomized[j]] = [randomized[j], randomized[i]];
  }
  return randomized;
}

// A simple seeded random generator to produce a pseudo-random number in [0,1)
// based on a seed. This ensures that each cell always gets the same “random” value.
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const getResponsiveDimensions = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  let cellWidth, cellHeight;
  if (width >= 1024) {
    cellWidth = 450;
    cellHeight = 600;
  } else if (width >= 768) {
    cellWidth = 400;
    cellHeight = Math.round(400 * (600 / 450));
  } else if (width >= 500) {
    cellWidth = 350;
    cellHeight = Math.round(350 * (600 / 450));
  } else {
    if (width < height) {
      cellWidth = 300;
      cellHeight = Math.round(300 * (600 / 450));
    } else {
      cellWidth = 400;
      cellHeight = 300;
    }
  }
  return { cellWidth, cellHeight };
};

const Test = ({ data }) => {
  const GAP = 15;
  const [dimensions, setDimensions] = useState(getResponsiveDimensions());
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  // Randomize the provided data globally.
  const [shuffledData, setShuffledData] = useState(() => randomizeData(data));
  useEffect(() => {
    setShuffledData(randomizeData(data));
  }, [data]);

  const columns = 1000;
  const rows = 1000;
  const containerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const lastScrollLeft = useRef(0);
  const ticking = useRef(false);

  // Update dimensions on window resize.
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

  // Center scroll on mount or when window/dimensions change.
  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight, scrollWidth, scrollHeight } = containerRef.current;
      const centerX = (scrollWidth - clientWidth) / 2;
      const centerY = (scrollHeight - clientHeight) / 2;
      containerRef.current.scrollLeft = centerX;
      containerRef.current.scrollTop = centerY;
      lastScrollLeft.current = centerX;
      lastScrollTop.current = centerY;
    }
  }, [windowSize, dimensions]);

  // Update animations (vertical/horizontal shrink and recentering).
  const updateAnimations = () => {
    const container = containerRef.current;
    if (!container) return;

    // Vertical shrink.
    const scrollTop = container.scrollTop;
    const deltaY = Math.abs(scrollTop - lastScrollTop.current);
    const newScaleX = 1 - Math.min(deltaY / 300, 0.07);
    gsap.to(".gallery-card", {
      scaleX: newScaleX,
      duration: 0.1,
      ease: "power1.out",
    });
    clearTimeout(updateAnimations.resetTimeout);
    updateAnimations.resetTimeout = setTimeout(() => {
      gsap.to(".gallery-card", {
        scaleX: 1,
        duration: 0.2,
        ease: "power1.out",
      });
    }, 150);
    lastScrollTop.current = scrollTop;

    // Horizontal shrink.
    const currentScrollLeft = container.scrollLeft;
    const deltaX = Math.abs(currentScrollLeft - lastScrollLeft.current);
    const newScaleY = 1 - Math.min(deltaX / 300, 0.03);
    gsap.to(".gallery-img", {
      scaleY: newScaleY,
      duration: 0.1,
      ease: "power1.out",
    });
    clearTimeout(updateAnimations.resetTimeoutHorizontal);
    updateAnimations.resetTimeoutHorizontal = setTimeout(() => {
      gsap.to(".gallery-img", {
        scaleY: 1,
        duration: 0.2,
        ease: "power1.out",
      });
    }, 150);
    lastScrollLeft.current = currentScrollLeft;

    // Center scroll logic.
    const thresholdX = dimensions.cellWidth * 20;
    const thresholdY = dimensions.cellHeight * 20;
    if (
      currentScrollLeft < thresholdX ||
      currentScrollLeft > container.scrollWidth - container.clientWidth - thresholdX
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
      scrollTop > container.scrollHeight - container.clientHeight - thresholdY
    ) {
      const centerY = (container.scrollHeight - container.clientHeight) / 2;
      gsap.to(container, {
        duration: 0.5,
        scrollTo: { y: centerY },
        ease: "power2.inOut",
      });
      lastScrollTop.current = centerY;
    }

    // Columns parallax.
    const centerScrollY = (container.scrollHeight - container.clientHeight) / 2;
    const parallaxCells = container.querySelectorAll(".parallax-cell");
    parallaxCells.forEach((cell) => {
      const colIndex = parseInt(cell.getAttribute("data-col-index"), 10);
      const factor = 0.9 + ((Math.sin(colIndex) + 1) / 2) * 0.2;
      const parallaxOffsetY = (container.scrollTop - centerScrollY) * (factor - 1);
      gsap.to(cell, {
        y: parallaxOffsetY,
        duration: 0.1,
        ease: "power1.out",
      });
    });
  };

  // Throttle scroll events.
  const handleScroll = () => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        updateAnimations();
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  // For each cell, use a seeded random value (based on row and column) to pick an element from the shuffled data.
  const renderCell = useCallback(
    ({ columnIndex, rowIndex, style }) => {
      const adjustedStyle = { ...style };
      const seed = rowIndex * columns + columnIndex;
      const randomValue = seededRandom(seed);
      const index = Math.floor(randomValue * shuffledData.length);
      const item = shuffledData[index];

      return (
        <div style={adjustedStyle}>
          <div
            className="parallax-cell"
            data-col-index={columnIndex}
            style={{ width: "100%", height: "100%" }}
          >
            <div style={{ margin: GAP / 2, width: "100%", height: "100%" }}>
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
        </div>
      );
    },
    [shuffledData, columns]
  );

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
      itemKey={({ columnIndex, rowIndex }) => rowIndex * columns + columnIndex}
    >
      {renderCell}
    </Grid>
  );
};

export default Test;
