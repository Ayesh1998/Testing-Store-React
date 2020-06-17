import React from "react";

import VideoBox from "../../components/videobox/videobox-component";
import SearchBar from "../../components/search-bar/search-bar-component";
import HomepageBottomCategoriesAll from "../../components/homepage-bottom-categories-part/homepage-bottom-categories-part-components";
import AllCategoriesWithproduct from "../../components/all-categories-withproducts/all-categories-withproducts-component";
import Footer from "../../components/footer/footer-component";
import { useSelector } from "react-redux";

const Homepage = (props) => {
  const stateRedux = useSelector((state) => state);

  return (
    <div>
      <VideoBox />
      <SearchBar />
      <HomepageBottomCategoriesAll />
    </div>
  );
};

export default Homepage;
