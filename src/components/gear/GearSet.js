import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import GearSearch from "./GearSearch";
import "./GearSet.css";

function GearSet(props) {
  // const [isLoading, setIsLoading] = useState(false);
  const [tblOptions, setTblOptions] = useState([
    { field: "_id", header: "ID", visible: false, stat: false },
    { field: "name", header: "Name", visible: true, stat: false },
    { field: "slotName", header: "Slot", visible: true, stat: false },
  ]);

  useEffect(() => {
    // setIsLoading(true)
    const items = props.gearList;
    let options = tblOptions;

    items.forEach((item) => {
      if (item.stats) {
        const itemKeys = Object.keys(item.stats);
        itemKeys.forEach((key) => {
          const fieldMatch = options.find((option) => option.field === key);
          if (!fieldMatch) {
            options.push({ field: key, header: key, visible: false, stat: true });
          }
        });
      }
    });
    setTblOptions([...options]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gearList]);

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

  const toggleFilter = (field) => {
    // console.log(field);
  };

  const dynamicFilters = tblOptions.map((item) => {
    return (
      item.stat && (
        <Button
          key={item.field}
          type="button"
          label={item.field}
          className="p-button-sm p-button-info p-button-outlined p-mr-1"
          onClick={toggleFilter(item.field)}
        />
      )
    );
  });

  const headerBar = (
    <div className="table-header">
      <div>
        <div className="p-d-flex p-jc-between">
          <div className="p-m-0">
            <GearSearch onSearchText={props.onSearchText} />
          </div>
          <div className="p-pt-2">
            <span>{dynamicFilters}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const statTotals = (props) => {
    const items = props.gearList;
    let stats = {};
    items.forEach((item) => {
      if (item.stats.STR) {
        stats.STR = (stats.STR || 0) + item.stats.STR;
      }
    });
    return stats;
  };

  const footer = (
    <table className="test p-datatable-thead">
      <tfoot>
        <tr role="row">
          <th style={{ width: "38.5%", textAlign: "right", background: "#f8f9fa" }}>
            <span className="p-column-title p-mr-5">Set Totals</span>
          </th>
          <th style={{ width: "8.5%", textAlign: "center" }}>
            <span className="p-column-title">{statTotals(props).STR}</span>
          </th>
          <th style={{ width: "8.5%", textAlign: "center" }}>
            <span className="p-column-title">DEX</span>
          </th>
          <th style={{ width: "8.5%", textAlign: "center" }}>
            <span className="p-column-title">VIT</span>
          </th>
          <th style={{ width: "8.5%", textAlign: "center" }}>
            <span className="p-column-title">AGI</span>
          </th>
          <th style={{ width: "8.5%", textAlign: "center" }}>
            <span className="p-column-title">INT</span>
          </th>
          <th style={{ width: "8.5%", textAlign: "center" }}>
            <span className="p-column-title">MND</span>
          </th>
          <th style={{ width: "8.5%", textAlign: "center" }}>
            <span className="p-column-title">CHR</span>
          </th>
        </tr>
      </tfoot>
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
        {colVisible.isSTRVisible && <Column field="stats.STR" header="GearHaste" style={{ width: "8.5%", textAlign: "center" }}></Column>}
        {colVisible.isDEXVisible && <Column field="stats.DEX" header="GearHaste" style={{ width: "8.5%", textAlign: "center" }}></Column>}
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
