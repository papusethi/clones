import React from "react";
import "./HeroSection.css";
import zigzagarrow from "../../assets/images/zigzag-arrow.svg";

const HeroSection = () => {
  return (
    <>
      <div className="section_heading">
        <h1 className="gradient_section_heading">Your Products</h1>
        <h1>
          Born Connected <br /> &amp; Staying Connected...
        </h1>
      </div>
      <img className="zizag_arrow" src={zigzagarrow} alt="arrow" />
    </>
  );
};

export default HeroSection;
