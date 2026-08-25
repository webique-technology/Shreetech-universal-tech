import React from "react";
import TopBar from "../components/TopBar";
import Slider from "../components/Slider";
import GroupCompanies from "../components/GroupCompanies";
import BalasabBorade from "../components/BalasabBorade";
import NumbersSec from "../components/NumbersSec";
import AwardsAchivements from "../components/AwardsAchivements";
import MarqueeMoving from "../components/MarqueeMoving";
import Community from "../components/Community";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <GroupCompanies />
      {/* <BalasabBorade /> */}
      {/* <NumbersSec /> */}
      <AwardsAchivements />
      <Community />
      <MarqueeMoving />
    </div>
  );
};

export default Home;
