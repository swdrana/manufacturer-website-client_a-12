import React from "react";
import "react-multi-carousel/lib/styles.css";
import Counter from "./Home/Counter";
import ReviewSec from "./Home/ReviewSec";
import Top10 from "./Home/Top10";
import FeatureTools from "./Home/FeatureTools";
import BannerSec from "./Home/BannerSec";
import Teams from "./Home/Teams";
const Home = () => {
  return (
    <div>
      <BannerSec />
      <FeatureTools />
      <Counter />
      <Top10 />
      <Teams/>
      <ReviewSec />
    </div>
  );
};

export default Home;
