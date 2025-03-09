// Works
import fastrack from "./assets/images/pages/works/fastrack.png";
import holykicks from "./assets/images/pages/works/holykicks.png";
import moraleCode from "./assets/images/pages/works/morale_code.png";
import mrn from "./assets/images/pages/works/mrn.png";
import optimalMinds from "./assets/images/pages/works/optimal_minds.png";
import socialDining from "./assets/images/pages/works/social_dining.png";
import umi from "./assets/images/pages/works/umi.png";

import umiBranding from "./assets/images/pages/services/branding/umi.png";
import desiDhartiBranding from "./assets/images/pages/services/branding/desi_dharti.png";
import ticklePickleBranding from "./assets/images/pages/services/branding/tickle_pickle.png";
import holyKicksBranding from "./assets/images/pages/services/branding/holy_kicks.png";

import palmsLogo from "./assets/images/logo/palms_logo.png";

// Web
import unnecessaryWeb from "./assets/images/pages/services/web/unnecessary.png";
import umiWeb from "./assets/images/pages/services/web/umi.png";
import desiDhartiWeb from "./assets/images/pages/services/web/desi_dharti.png";
import holyKicksWeb from "./assets/images/pages/services/web/holy_kicks.png";
import studioMasonWeb from "./assets/images/pages/services/web/studio_mason.png";

// Socials
import cosmeticMockup from "./assets/images/pages/socials/mockups/cosmetic_mockup.png";
import gamdiasMockup from "./assets/images/pages/socials/mockups/gamdias_mockup.png";
import holyKicksMockup from "./assets/images/pages/socials/mockups/holykicks_mockup.png";
import optimaMindsMockup from "./assets/images/pages/socials/mockups/optimal_minds_mockup.png";
import ticklePickleMockup from "./assets/images/pages/socials/mockups/ticklepickle_mockup.png";
import yawnMockup from "./assets/images/pages/socials/mockups/yawn_mockup.png";

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

export const brandingData = {
  images: [
    umiBranding,
    desiDhartiBranding,
    ticklePickleBranding,
    holyKicksBranding,
  ],

  paragraph:
    "At BAW Studios, we believe branding goes beyond visuals it’s about crafting a unique identity that resonates with your audience. Our team offers comprehensive solutions including strategic branding, logo design, and digital branding to ensure your business stands out. Let us transform your brand into a powerful asset that drives growth and enhances your market presence.",

  brandingElements: [
    {
      title: "Logo Design",
      description:
        "The visual cornerstone of a brand, a logo is a symbol or design that represents the organization in a simple but impactful way.",
    },

    {
      title: "Color Palette",
      description:
        "Specific colors associated with the brand that evoke certain emotions and convey the brand’s personality across all mediums.",
    },
    {
      title: "Typography",
      description:
        "The selection of typefaces used consistently across the brand’s communications to ensure coherence and recognition.",
    },
    {
      title: "Brand Voice",
      description:
        " The distinct personality and tone used in all written and spoken communication which reflects the brand’s values and target audience.",
    },
    {
      title: "Brand Guidelines",
      description:
        " A set of rules on how the brand’s identity should be communicated across various channels. This includes the correct use of the logo, color palette, typography, and the overall tone of the brand.",
    },
    {
      title: "Brand Strategy",
      description:
        "The overall plan for the development of the brand to ensure it meets the set goals, including understanding the target audience, brand positioning, and competitive analysis.",
    },
  ],
};

export const websiteData = [
  {
    id: 1,
    title: "UMI",
    thumbnail: umiWeb,
    redirect: "http://umimatchashop.com",
  },
  {
    id: 2,
    title: "Holy Kicks",
    thumbnail: holyKicksWeb,
    redirect: "https://holykicks1.onrender.com",
  },
  {
    id: 3,
    title: "Unecessary",
    thumbnail: unnecessaryWeb,
    redirect: "https://unnssry.shop",
  },
  {
    id: 4,
    title: "Desi Dharti",
    thumbnail: desiDhartiWeb,
    redirect: "https://desi-dharti.vercel.app",
  },
  {
    id: 5,
    title: "Studio Mason",
    thumbnail: studioMasonWeb,
    redirect: "https://studiomason.in",
  },
];

export const socialsData = {
  content: {
    extraText: "GET YOUR FEED ALIGNED WITH BAW STUDIOS",
    ctaText: "KNOW MORE",
    ctaLink: "/contact",
  },

  data: [
    {
      id: 1,
      title: "Cosmetic",
      image: cosmeticMockup,
      redirect: "https://google.com",
    },
    {
      id: 2,
      title: "Gamdias",
      image: gamdiasMockup,
      redirect: "",
    },
    {
      id: 3,
      title: "Holy Kicks",
      image: holyKicksMockup,
      redirect: "",
    },
    {
      id: 4,
      title: "Optimal Minds",
      image: optimaMindsMockup,
      redirect: "",
    },
    {
      id: 5,
      title: "Tickle Pickle",
      image: ticklePickleMockup,
      redirect: "",
    },
    {
      id: 6,
      title: "Yawn",
      image: yawnMockup,
      redirect: "",
    },
  ],
};
