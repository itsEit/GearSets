import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function GearSet(props) {
  // const [gearList, setGearList] = useState(props.gearList);

  let headerTitle = 'Gear Sets'

  let colVisible = {
    isIdVisible: true,
    isNameVisible: true,
    isLevelVisible: false,
    isSlotsVisible: true,
    isSTRVisible: true,
    isDEXVisible: true,
    isVITVisible: true,
    isAGIVisible: true,
    isINTVisible: true,
    isMNDVisible: true,
    isCHRVisible: true,
  }

  const headerBar = <div className="p-p-0">{headerTitle}</div>

  return (
    <div className="card">
      <DataTable value={props.gearList} header={headerBar} showGridlines>
        {colVisible.isIdVisible && <Column field="id" header="ID"></Column>}
        {colVisible.isNameVisible && <Column className="c-high-stat" field="name" header="Name"></Column>}
        {colVisible.isLevelVisible && <Column field="level" header="Level"></Column>}
        {colVisible.isSlotsVisible && <Column field="slots" header="Slot"></Column>}
        {colVisible.isSTRVisible && <Column className="c-low-stat"  field="level" header="STR"></Column>}
        {colVisible.isDEXVisible && <Column field="level" header="DEX"></Column>}
        {colVisible.isVITVisible && <Column field="slots" header="VIT"></Column>}
        {colVisible.isAGIVisible && <Column field="level" header="AGI"></Column>}
        {colVisible.isINTVisible && <Column field="level" header="INT"></Column>}
        {colVisible.isMNDVisible && <Column field="level" header="MND"></Column>}
        {colVisible.isCHRVisible && <Column field="level" header="CHR"></Column>}
      </DataTable>
    </div>
  );
}

export default GearSet;
