import React from "react";
import "./SidebarOptions.css";

const SideBarOptions = ({ title, Icon }) => {
  return (
    <div className="sidebar_options">
      {Icon && <Icon className="sidebarOptions_logo" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SideBarOptions;
