import React from "react";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Stats from "./Stats";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Tools></Tools>
      <Stats></Stats>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
