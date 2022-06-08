import "./Footer.css";
import React from "react";
import logo from "../../assets/images/logo.svg";
import mobilezizag from "../../assets/images/footer-stroke-mob.svg";
import bigzigzgagarrow from "../../assets/images/bigfooter-zigzag.png";
import smallzigzgagarrow from "../../assets/images/smallfooter-zigzag.png";

import SocialsList from "../SocialList/SocialsList";
import FooterHeading from "../FooterHeadings/FooterHeading";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerSubHeadingsSolutions = [
    "Asset tracking",
    "Power and Water Utility Companies ",
    "Smart Buildings and Smart City Projects",
    "Healthcare Equipment",
  ];

  const footerSubHeadingsResource = [
    "Videos",
    "Blogs ",
    "News",
    "White Papers",
  ];

  return (
    <div className="footer">
      <div className="arrow-lines">
        <img src={bigzigzgagarrow} className="desktop-svg" />
        <img src={mobilezizag} className="mobile-svg" />

        <div style={{ textAlign: "end" }} className="desktop-svg">
          <img src={smallzigzgagarrow} alt="" />
        </div>
      </div>
      <SocialsList classNameProp="desktop-socials" />
      <div style={{ textAlign: "left" }}>
        <img className="footer-logo" src={logo} alt="logo" />
      </div>

      <div className="footer-head">
        <div className="footer-heading-parent">
          <FooterHeading footerheading="Solutions" />
          <ul className="subheading-list">
            {footerSubHeadingsSolutions.map((subheading, key) => {
              return (
                <li className="subheading" key={key}>
                  <NavLink to={`/${subheading}`}>{subheading}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="footer-heading-parent">
          <FooterHeading footerheading="Resource" />
          
          <ul className="subheading-list subheading-list1">
            {footerSubHeadingsResource.map((subheading, key) => {
              return (
                <li className="subheading subheading1" key={key}>
                  <NavLink to={`/${subheading}`}>{subheading}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <SocialsList classNameProp="mobile-socials" />
      <p className="copyright-text">
        © 2022 Tata Communications. All rights reserved. TATA COMMUNICATIONS and
        TATA are trademarks of Tata Sons Private Limited. |
        <NavLink to="/tnc">Terms &amp; conditions</NavLink>
      </p>
    </div>
  );
};

export default Footer;
