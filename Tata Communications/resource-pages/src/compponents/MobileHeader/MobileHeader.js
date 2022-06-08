import React from "react";
import "./MobileHeader.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import mobileheadercolorfullimg from "../../assets/images/mobileheader-img.png";
import logo from "../../assets/images/logo.svg";

const MobileHeader = () => {
  const items = [
    {
      icon: (
        <NavLink className="nav-links" to="/solution">
          Solution
        </NavLink>
      ),
      items: [
        {
          icon: <NavLink to="/asset-tracking">Asset Tracking</NavLink>,
        },
        {
          icon: <NavLink to="/utility-companies">Utility Companies </NavLink>,
        },
        {
          icon: <NavLink to="/smart-city">Smart City Projects </NavLink>,
        },
        {
          icon: (
            <NavLink to="/healtcare-equipment">Healthcare Equipment </NavLink>
          ),
        },
      ],
    },

    {
      icon: (
        <NavLink className="nav-links" to="/resource">
          Resource
        </NavLink>
      ),
      items: [
        {
          icon: <NavLink to="/videos">Videos </NavLink>,
        },
        {
          icon: <NavLink to="/blogs">Blogs </NavLink>,
        },
        {
          icon: <NavLink to="/news">News </NavLink>,
        },
        {
          icon: <NavLink to="/white-papers">White Papers </NavLink>,
        },
      ],
    },
    {
      icon: (
        <NavLink className="nav-links" to="/cart">
          <h4 style={{ margin: "0" }}>My Cart</h4>
        </NavLink>
      ),
    },
    {
      icon: (
        <NavLink className="nav-links" to="/login">
          <h4 style={{ margin: "0" }}>Login</h4>
        </NavLink>
      ),
    },
    {
      icon: (
        <img className="colorful-img" src={mobileheadercolorfullimg} alt="" />
      ),
    },
  ];

  const start = (
    <img
      alt="logo"
      src={logo}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height="40"
      className="logo"
    ></img>
  );

  return (
    <>
      <Menubar className="mobile-header" start={start} model={items} />
    </>
  );
};

export default MobileHeader;
