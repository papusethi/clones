import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  return (
    <>
      <button className="primary_btn_bg">{props.value}</button>
    </>
  );
};

export default PrimaryButton;
