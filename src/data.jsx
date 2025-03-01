// Works
import fastrack from "./assets/images/pages/works/fastrack.png";
import holykicks from "./assets/images/pages/works/holykicks.png";
import moraleCode from "./assets/images/pages/works/morale_code.png";
import mrn from "./assets/images/pages/works/mrn.png";
import optimalMinds from "./assets/images/pages/works/optimal_minds.png";
import socialDining from "./assets/images/pages/works/social_dining.png";
import umi from "./assets/images/pages/works/umi.png";

import palmsLogo from './assets/images/logo/palms_logo.png';

export const worksData = [
  {
    id: 1,
    thumbnail: fastrack,
    redirect: "/works/fastrack",
    title: "Fastrack",
    logo: palmsLogo,
    images: [
      { one: [fastrack, umi, holykicks] },
      { two: [mrn, optimalMinds, socialDining] },
      { three: [umi, socialDining, moraleCode] },
    ],
  },
  {
    id: 2,
    thumbnail: holykicks,
    redirect: "/works/holykicks",
    title: "Holy Kicks",
    logo: palmsLogo,
    images: [
      { one: [fastrack, umi, holykicks] },
      { two: [mrn, optimalMinds, socialDining] },
      { three: [umi, socialDining, moraleCode] },
    ],
  },
  {
    id: 3,
    thumbnail: moraleCode,
    redirect: "/works/morale-code",
    title: "Morale Code",
    logo: palmsLogo,
    images: [
      { one: [fastrack, umi, holykicks] },
      { two: [mrn, optimalMinds, socialDining] },
      { three: [umi, socialDining, moraleCode] },
    ],
  },
  {
    id: 4,
    thumbnail: mrn,
    redirect: "/works/mrn",
    title: "MRN",
    logo: palmsLogo,
    images: [
      { one: [fastrack, umi, holykicks] },
      { two: [mrn, optimalMinds, socialDining] },
      { three: [umi, socialDining, moraleCode] },
    ],
  },
  {
    id: 5,
    thumbnail: optimalMinds,
    redirect: "/works/optimal-minds",
    title: "Optimal Minds",
    logo: palmsLogo,
    images: [
      { one: [fastrack, umi, holykicks] },
      { two: [mrn, optimalMinds, socialDining] },
      { three: [umi, socialDining, moraleCode] },
    ],
  },
  {
    id: 6,
    thumbnail: socialDining,
    redirect: "/works/social-dining",
    title: "Social Dining",
    logo: palmsLogo,
    images: [
      { one: [fastrack, umi, holykicks] },
      { two: [mrn, optimalMinds, socialDining] },
      { three: [umi, socialDining, moraleCode] },
    ],
  },
  {
    id: 7,
    thumbnail: umi,
    redirect: "/works/umi",
    title: "UMI",
    logo: palmsLogo,
    images: [
      { one: [fastrack, umi, holykicks] },
      { two: [mrn, optimalMinds, socialDining] },
      { three: [umi, socialDining, moraleCode] },
    ],
  },
];
