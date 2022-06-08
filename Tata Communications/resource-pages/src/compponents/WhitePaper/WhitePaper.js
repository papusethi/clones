import React from "react";
import "./WhitePaper.css";
import whitePapersData from "../../const/WhitePapersData";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const WhitePaper = () => {
  return (
    <>
      {whitePapersData.map((whitepaper, key) => {
        return (
          <div key={key} className="whitepaper-parent">
            <h4>{whitepaper.heading}</h4>
            <p>{whitepaper.details}</p>
            <PrimaryButton value="Read More" />
          </div>
        );
      })}
    </>
  );
};

export default WhitePaper;
