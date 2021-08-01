import React, { useState } from "react";
import { parseGear } from "../utilities/GearParser";
import GearSearch from "../components/gear/GearSearch";
import GearSet from "../components/gear/GearSet";

function Main(props) {
  const [gearList, setGearList] = useState([]);

  function onSearchText(data) {
    if (data.id) {
      const idMatch = gearList.find((item)=>item.id === data.id)
      if(!idMatch){
        setGearList((gearList) => [...gearList, data]);
        parseGear("parseGear");
      } else {
        alert("Duplicate")
      }
    }
  }

  return (
    <div className="card">
      <GearSearch onSearchText={onSearchText} />;
      <GearSet gearList={gearList} />
    </div>
  );
}
export default Main;
