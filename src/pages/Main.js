import React, { useState } from "react";
import { parseGear } from "../utilities/GearParser";
import GearSet from "../components/gear/GearSet";

function Main(props) {
  const [gearList, setGearList] = useState([]);

  function onSearchText(data) {
    if (data.id) {
      const idMatch = gearList.find((item) => item.id === data.id);
      if (!idMatch) {
        setGearList((gearList) => [...gearList, parseGear(data)]);
      } else {
        alert("Duplicate");
      }
    }
  }

  return (
    <div className="card">
      <GearSet gearList={gearList} onSearchText={onSearchText} />
    </div>
  );
}
export default Main;
