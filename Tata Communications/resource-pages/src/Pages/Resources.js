import React from "react";
import "./Resources.css";
import HeroSection from "../compponents/HeroSection/HeroSection";
import SearchInputBar from "../compponents/SearchInputBar/SearchInputBar";
import DataContainer from "../compponents/DataContainer/DataContainer";

const Resources = () => {
  return (
    <div className="resource-parent">
      <HeroSection />
      <SearchInputBar />
      <DataContainer />
    </div>
  );
};

export default Resources;
