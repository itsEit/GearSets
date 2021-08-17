import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import GearSearch from "./GearSearch";

function GearSet(props) {
  // const [gearList, setGearList] = useState(props.gearList);

  // let headerTitle = 'Gear Sets'

  let colVisible = {
    isIdVisible: false,
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
  };

  // const headerBar = <div className="p-p-0">{headerTitle}<GearSearch onSearchText={onSearchText} /></div>
  const headerBar = (
    <div className="table-header">
      {/* <span className="p-text-center">Some Title</span> */}
      <div>
        <div className="p-d-flex p-jc-between">
          <div className="p-m-0">
            <GearSearch onSearchText={props.onSearchText} />
          </div>
          <div className="p-d-flex">
            <div className="p-m-1">
              <Button type="button" label="Save" className="p-d-block p-mx-auto p-button-info" />
            </div>
            <div className="p-m-1">
              <Button type="button" label="Delete" className="p-d-block p-mx-auto p-button-danger" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="card p-p-1">
      <DataTable value={props.gearList} header={headerBar} showGridlines>
        {colVisible.isIdVisible && <Column field="id" header="ID"></Column>}
        {colVisible.isNameVisible && <Column field="name" header="Name"></Column>}
        {colVisible.isLevelVisible && <Column field="level" header="Level"></Column>}
        {colVisible.isSlotsVisible && <Column field="slotName" header="Slot"></Column>}
        {colVisible.isSTRVisible && <Column field="stats.STR" header="STR"></Column>}
        {colVisible.isDEXVisible && <Column field="stats.DEX" header="DEX"></Column>}
        {colVisible.isVITVisible && <Column field="stats.VIT" header="VIT"></Column>}
        {colVisible.isAGIVisible && <Column field="stats.AGI" header="AGI"></Column>}
        {colVisible.isINTVisible && <Column field="stats.INT" header="INT"></Column>}
        {colVisible.isMNDVisible && <Column field="stats.MND" header="MND"></Column>}
        {colVisible.isCHRVisible && <Column field="stats.CHR" header="CHR"></Column>}
      </DataTable>
    </div>
  );
}

export default GearSet;
