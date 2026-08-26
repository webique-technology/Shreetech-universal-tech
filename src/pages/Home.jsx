import React from "react";
import Slider from "../components/Slider";
import GroupCompanies from "../components/GroupCompanies";
import ProductsSec from "../components/ProductsSec";
import MarqueeMoving from "../components/MarqueeMoving";
import Community from "../components/Community";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <MarqueeMoving />
      <GroupCompanies />
      <ProductsSec />
      <Community />
    </div>
  );
};

export default Home;
