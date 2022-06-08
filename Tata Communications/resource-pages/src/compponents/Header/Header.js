import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import logo from "../../assets/images/logo.svg";
import cartImg from "../../assets/images/cart.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Header = () => {
  const items = [
    {
      icon: (
        <NavLink className="nav-links" to="/solution">
          Solution
        </NavLink>
      ),
    },
    {
      icon: (
        <NavLink className="nav-links" to="/resource">
          Resource
        </NavLink>
      ),
    },
    {
      label: "",
      icon: (
        <NavLink className="nav-links" to="/cart">
          <img
            className="cart-img"
            alt="Photos"
            src={`${cartImg}`}
            width="100%"
          />
        </NavLink>
      ),
    },
    {
      icon: (
        <NavLink className="nav-links" to="/login">
          <PrimaryButton value="Login" />
        </NavLink>
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
      <Menubar className="header" start={start} model={items} />
    </>
  );
};

export default Header;
