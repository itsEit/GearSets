import React, { useState,useEffect } from "react";
import { Menubar } from "primereact/menubar";

function NavTop(props) {
  const [userName, setUserName] = useState("");
  
  useEffect(()=>{
    setUserName(props.userInfo.userName)
  },[props])
  const navItems = [
    {
      label: "MySets",
      icon: "pi pi-fw pi-user",
    },
    {
      label: "Dashboard",
      icon: "pi pi-fw pi-chart-line",
    },
  ];

  // const start = <h2 className="p-m-1">Gear Analyzer</h2>;
  const start = <img alt="logo" src="GearAnalyzerTitle.png" height="45" className="p-mr-0"></img>;
  const end = <h3 className="p-m-1">{userName}</h3>;

  return <Menubar className="p-p-1" model={navItems} start={start} end={end} />;
}

export default NavTop;
