import React from "react";
import "./works.scss";
import { worksData } from "../../data";
import BackButton from "../../components/BackButton/BackButton";
import MainMenu from "../../components/MainMenu/MainMenu";

// import InteractiveCarousel from "../../components/WorksInternal/InteractiveCarousel";
import InteractiveGridGallery from "../../components/InteractiveGridGallery/InteractiveGridGallery";

const Works = () => {
  return (
    <>
    <MainMenu />
      <section className="works-section">
        <div className="back">
          <BackButton />
        </div>
        <InteractiveGridGallery data={worksData} />
        {/* <div className="left">
        <h1>BRANDS</h1>
        <p>
          At BAW Studios, we partner with brands to forge distinctive digital
          identities that resonate with their target audiences. Our approach is
          highly collaborative, involving our clients in every step of the
          creative process to ensure their vision is fully realized. By
          combining innovative digital strategy with cutting-edge design and
          dynamic content creation, we help brands stand out in a crowded
          marketplace. We pride ourselves on delivering measurable results
          through tailored solutions that not only meet but exceed our clients'
          expectations. At BAW Studios, your brand's success is engineered by
          our commitment to excellence and our passion for digital innovation.
        </p>
        <BackButton />
      </div>
      <div className="right">
        <div className="left-container">
          <InteractiveCarousel data={worksData} />
        </div>
        <div className="right-container">
          <InteractiveCarousel data={worksData} direction="top" />
        </div>
      </div> */}
      </section>
    </>
  );
};

export default Works;
