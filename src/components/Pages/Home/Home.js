import React from "react";
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
    </div>
  );
};

export default Home;
