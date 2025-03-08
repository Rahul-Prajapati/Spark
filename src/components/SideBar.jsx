import React from "react";
import SparkLogo from "../assets/spark_flame_icon.svg"
import  LinksIcon  from "../assets/Links.svg";
import  AppearanceIcon  from "../assets/Appearance.svg";
import  AnalyticsIcon  from "../assets/Analytics.svg";
import  SettingsIcon  from "../assets/Setting.svg";
import "./Sidebar.css";

const SideBar = ({ selectedSection, setSelectedSection }) => {
  const menuItems = [
    { name: "Links", icon: LinksIcon },
    { name: "Appearance", icon: AppearanceIcon },
    { name: "Analytics", icon: AnalyticsIcon },
    { name: "Settings", icon: SettingsIcon },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img className="logo" src={SparkLogo} alt="LOGO" />
        <span className="dashboard-spark">Spark</span>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={selectedSection === item.name ? "active" : ""}
            onClick={() => setSelectedSection(item.name)}
          >
            <img className="icons" src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
