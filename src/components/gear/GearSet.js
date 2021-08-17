import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import GearSearch from "./GearSearch";
import "./GearSet.css";

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

  const headerBar = (
    <div className="table-header">
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

  // const footer = (
  //   <div className="p-d-flex p-jc-end">
  //     <div style={{ width: "30%" }}>hello</div>
  //     <div style={{ width: "8.5%" }}>hello</div>
  //     <div style={{ width: "8.5%", textAlign: "center", border: "1px solid #e9ecef" }}>STR</div>
  //     <div style={{ width: "8.5%", textAlign: "center" }}>DEX</div>
  //     <div style={{ width: "8.5%", textAlign: "center" }}>VIT</div>
  //     <div style={{ width: "8.5%", textAlign: "center" }}>AGI</div>
  //     <div style={{ width: "8.5%", textAlign: "center" }}>INT</div>
  //     <div style={{ width: "8.5%", textAlign: "center" }}>MND</div>
  //     <div style={{ width: "8.5%", textAlign: "center" }}>CHR</div>
  //   </div>
  // );

  const footer = (
    <table className="test p-datatable-thead">
      <tr role="row">
        <th style={{ width: "38.5%", textAlign: "right", background:"#f8f9fa"}}>
          <span class="p-column-title p-mr-5">Set Totals</span>
        </th>
        <th style={{ width: "8.5%", textAlign: "center" }}>
          <span class="p-column-title">STR</span>
        </th>
        <th style={{ width: "8.5%", textAlign: "center" }}>
          <span class="p-column-title">DEX</span>
        </th>
        <th style={{ width: "8.5%", textAlign: "center" }}>
          <span class="p-column-title">VIT</span>
        </th>
        <th style={{ width: "8.5%", textAlign: "center" }}>
          <span class="p-column-title">AGI</span>
        </th>
        <th style={{ width: "8.5%", textAlign: "center" }}>
          <span class="p-column-title">INT</span>
        </th>
        <th style={{ width: "8.5%", textAlign: "center" }}>
          <span class="p-column-title">MND</span>
        </th>
        <th style={{ width: "8.5%", textAlign: "center" }}>
          <span class="p-column-title">CHR</span>
        </th>
      </tr>
    </table>
  );
  return (
    <div className="card p-p-1">
      <DataTable
        value={props.gearList}
        header={headerBar}
        footer={footer}
        showGridlines
        resizableColumns
        columnResizeMode="fit"
        className="p-datatable-sm"
      >
        {colVisible.isIdVisible && <Column field="id" header="ID"></Column>}
        {colVisible.isNameVisible && <Column field="name" header="Name" style={{ width: "30%" }}></Column>}
        {colVisible.isLevelVisible && <Column field="level" header="Level"></Column>}
        {colVisible.isSlotsVisible && <Column field="slotName" header="Slot" style={{ width: "8.5%" }}></Column>}
        {colVisible.isSTRVisible && <Column field="stats.STR" header="STR" style={{ width: "8.5%", textAlign: "center" }}></Column>}
        {colVisible.isDEXVisible && <Column field="stats.DEX" header="DEX" style={{ width: "8.5%", textAlign: "center" }}></Column>}
        {colVisible.isVITVisible && <Column field="stats.VIT" header="VIT" style={{ width: "8.5%", textAlign: "center" }}></Column>}
        {colVisible.isAGIVisible && <Column field="stats.AGI" header="AGI" style={{ width: "8.5%", textAlign: "center" }}></Column>}
        {colVisible.isINTVisible && <Column field="stats.INT" header="INT" style={{ width: "8.5%", textAlign: "center" }}></Column>}
        {colVisible.isMNDVisible && <Column field="stats.MND" header="MND" style={{ width: "8.5%", textAlign: "center" }}></Column>}
        {colVisible.isCHRVisible && <Column field="stats.CHR" header="CHR" style={{ width: "8.5%", textAlign: "center" }}></Column>}
      </DataTable>
    </div>
  );
}

export default GearSet;
