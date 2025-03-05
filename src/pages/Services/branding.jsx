import React from "react";
import StackingImages from "../../components/StackingImages/StackingImages";

import umi from "../../assets/images/pages/services/branding/umi.png";
import desiDharti from "../../assets/images/pages/services/branding/desi_dharti.png";
import holyKicks from "../../assets/images/pages/services/branding/holy_kicks.png";
import ticklePickle from "../../assets/images/pages/services/branding/tickle_pickle.png";
import "./branding.scss";

const imagesArrary = [umi, desiDharti, ticklePickle, holyKicks];

const branding = () => {
  return <StackingImages images={imagesArrary} />;
};

export default branding;
