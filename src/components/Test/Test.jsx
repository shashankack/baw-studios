import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";

import { worksData } from "../../data";

const Test = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div style={{ width: "30%", height: "70%" }}>
        <ImageSlider images={worksData[0].images[0].one} direction="vertical" />
      </div>
    </div>
  );
};

export default Test;
