import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import GearSearch from "./GearSearch";
import "./GearSet.css";

const GearSet = (props) => {
  const [tblOptions, setTblOptions] = useState([
    { field: "_id", header: "ID", visible: false, stat: false },
    { field: "name", header: "Name", visible: true, stat: false, width: "30%" },
    { field: "slotName", header: "Slot", visible: true, stat: false, width: "8%" },
  ]);

  useEffect(() => {
    const items = props.gearList;
    let options = tblOptions;

    items.forEach((item) => {
      if (item.stats) {
        const itemKeys = Object.keys(item.stats);
        itemKeys.forEach((key) => {
          const fieldMatch = options.find((option) => option.field === key);
          if (!fieldMatch) {
            let header = "";
            switch (key) {
              case "MagicAcc":
                header = "mAcc";
                break;
              case "MeleeAcc":
                header = "Acc";
                break;
              case "GearHaste":
                header = "Haste";
                break;
              default:
                header = key;
            }
            options.push({ field: key, header: header, visible: true, stat: true, width: "8.5%", textAlign: "center" });
          }
        });
      }
    });
    setTblOptions([...options]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gearList]);

  const toggleFilter = (field) => {
    const curField = field.target.innerText;
    let updatedList = tblOptions.map((item) => {
      if (item.field === curField) {
        item.visible = !item.visible;
      }
      return item;
    });
    setTblOptions(updatedList);
  };

  const dynamicFilters = tblOptions.map((item) => {
    const selected = "p-button-sm p-button-info p-mr-1";
    const unSelected = "p-button-sm p-button-info p-button-outlined p-mr-1";
    return (
      item.stat && (
        <Button key={item.field} type="button" label={item.field} className={item.visible ? selected : unSelected} onClick={toggleFilter} />
      )
    );
  });

  const dynamicColumns = tblOptions.map((item) => {
    return (
      item.visible && (
        <Column
          key={item.field}
          field={item.stat ? "stats." + item.field : item.field}
          header={item.header}
          style={{ width: item.width, textAlign: item.textAlign }}
        ></Column>
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

  const statTotals = (stat) => {
    const items = props.gearList;
    let stats = {};
    items.forEach((item) => {
      if (item.stats[stat]) {
        stats[stat] = (stats[stat] || 0) + item.stats[stat];
      }
    });
    return stats;
  };

  const footer = (
    <table className="test p-datatable-thead">
      <tfoot>
        <tr role="row">
          <th style={{ width: "38%", textAlign: "right" }}>
            <span className="p-column-title p-mr-5">Set Totals</span>
          </th>
          {tblOptions.map((item) => {
            return (
              item.visible &&
              item.stat && (
                <th key={item.field} style={{ width: item.width, textAlign: item.textAlign }}>
                  <span className="p-column-title">{statTotals(item.field)[item.field]}</span>
                </th>
              )
            );
          })}
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
        {dynamicColumns}
      </DataTable>
    </div>
  );
};

export default GearSet;
