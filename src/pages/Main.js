import React, { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import GearSet from "../components/gear/GearSet";
import { gearItem } from "../api/gearApi";

function Main(props) {
  const [gearList, setGearList] = useState([]);
  const toast = useRef(null);

  function onSearchText(data) {
    if (data.id) {
      const idMatch = gearList.find((item) => item._id === Number(data.id));
      if (!idMatch) {
        gearItem(data.id).then((res) => {
          if (res.status === "ok") {
            setGearList((gearList) => [...gearList, res.data]);
          } else {
            showError({ resTitle: res.data, errMessage: "If error persists... I'm sorry" });
          }
        });
      } else {
        showError({ resTitle: "Duplicate", errMessage: "There is a duplicate value" });
      }
    }
  }

  const showError = (err) => {
    toast.current.show({ severity: "error", summary: err.resTitle, detail: err.errMessage, life: 3000 });
  };

  return (
    <div className="card p-grid">
      <Toast ref={toast} />
      <div className="p-col-8">
        <GearSet gearList={gearList} onSearchText={onSearchText} />
      </div>
      <div className="p-col-10"></div>
    </div>
  );
}
export default Main;
