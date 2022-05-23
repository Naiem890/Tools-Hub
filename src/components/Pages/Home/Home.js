import React from "react";
import Cta from "./Cta";
import Features from "./Features";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Stats from "./Stats";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <Tools></Tools>
      <Stats></Stats>
      <Reviews></Reviews>
      <Cta></Cta>
    </div>
  );
};

export default Home;
