import React from "react";

// !assets
import { logo } from "../assets/Dashboard";

//! constants
import sidebarData from "../Constatnts/sidebarData";

function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBar__logo">
        <img src={logo} alt="promage " />
        <h1>Promage</h1>
      </div>
      <div className="SideBar__create">
        <span>+</span>
        <p>Create New Project</p>
      </div>
      <div className="SideBar__menu">
        {sidebarData?.map((item) => (
          <div className="SideBar__menu__item" key={item?.id}>
            <img src={item?.icon} alt={item?.title} />
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
