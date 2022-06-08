import React, { useEffect, useState } from "react";
import "./SideMenu.css";
import { Menubar } from "primereact/menubar";
import { Dropdown } from "primereact/dropdown";

const SideMenu = () => {
  const [topic, setTopic] = useState();
  const items = [
    {
      label: "Asset tracking",
    },
    {
      label: "Healthcare",
    },
    {
      label: "Smart city projects",
    },
    {
      label: "Utility companies",
    },
    {
      label: "eSIM",
    },
    {
      label: "Mobile solution",
    },
  ];

  return (
    <>
      <Dropdown
        className="mobile-sidemenu"
        value={topic}
        options={items}
        onChange={(e) => setTopic(e.value)}
        placeholder="All Topics"
      />
      <div className="side-menu-parent">
        <h1>Choose a topic</h1>
        <Menubar className="side-menubar" model={items} />
      </div>
    </>
  );
};

export default SideMenu;
