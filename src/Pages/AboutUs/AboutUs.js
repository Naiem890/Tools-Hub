import React from "react";
import Cta from "../Home/Cta";
import AboutContent from "./AboutContent";
import Banner from "./Banner";
import OurBenifit from "./OurBenifit";

const AboutUs = () => {
  return (
    <div>
      <Banner />
      <AboutContent />
      {/* <OurBenifit /> */}
      <Cta />
    </div>
  );
};

export default AboutUs;
