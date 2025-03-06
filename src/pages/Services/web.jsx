import "./web.scss";

import BackButton from "../../components/BackButton/BackButton";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";

import laptop from "../../assets/images/pages/services/web/laptop.png";
import unnecessary from "../../assets/images/pages/services/web/unnecessary.png";
import umi from "../../assets/images/pages/services/web/umi.png";
import desiDharti from "../../assets/images/pages/services/web/desi_dharti.png";
import holyKicks from "../../assets/images/pages/services/web/holy_kicks.png";
import studioMason from "../../assets/images/pages/services/web/studio_mason.png";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { websiteData } from "../../data";

const Web = () => {
  return (
    <section className="web-section">
      <div className="back">
        <BackButton />
      </div>

      <h3>Web Design & Development</h3>
      <div className="laptop-container">
        <img src={laptop} className="laptop" />
        <img src={unnecessary} className="website-1" />
        <img src={holyKicks} className="website-2" />
        <img src={studioMason} className="website-3" />
        <img src={desiDharti} className="website-4" />
        <img src={umi} className="website-5" />
      </div>

      <div className="moving-text-container">
        <MarqueeSlider text="YOUR WEBSITE OUR DESIGN - " />
      </div>

      <h3>AR - VR WEBSITES</h3>
      <div className="video-container"><ImageSlider images /></div>
    </section>
  );
};

export default Web;
