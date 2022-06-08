import React from "react";
import "./FooterHeading.css";

const FooterHeading = (props) => {
  return (
    <>
      <h2 className="footer-heading"> {props.footerheading}</h2>
    </>
  );
};

export default FooterHeading;
