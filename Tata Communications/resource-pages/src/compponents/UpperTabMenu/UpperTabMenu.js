import React, { useState } from "react";
import "./UpperTabMenu.css";
import { TabMenu } from "primereact/tabmenu";
import { useNavigate } from "react-router-dom";

const UpperTabMenu = (props) => {
  const [activeIndex, setActiveIndex] = useState();
  const navigate = useNavigate();
  const handleTabs = (e) => {
    setActiveIndex(e.index);
    navigate(`solution/${e.value.label}`);
    props.handleTabsView(e.value.label);
  };
  const items = [
    {
      label: "Videos",
    },
    { label: "Blog" },
    { label: "News" },
    { label: "White-Papers" },
  ];

  return (
    <>
      <TabMenu
        className="upper-menu-tab"
        model={items}
        activeIndex={activeIndex}
        onTabChange={handleTabs}
      />
    </>
  );
};

export default UpperTabMenu;
