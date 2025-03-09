import React from "react";
import InteractiveMarquee from "../../components/InteractiveMarquee/InteractiveMarquee";
import { socialsData } from "../../data";

const Social = () => {
  return (
    <>
      <div className="carousel-section">
        <InteractiveMarquee
          text="GET YOUR FEED ALIGNED"
          images={socialsData.data}
          extraText={socialsData.content.extraText}
          ctaLink="/contact"
          ctaText="KNOW MORE"
        />
      </div>
    </>
  );
};

export default Social;
