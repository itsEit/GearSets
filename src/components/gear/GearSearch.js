import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import ffxiItems from "../../assets/data/items.json";
import ffxiItemDesc from "../../assets/data/item_descriptions.json";

function GearSearch(props) {
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const searchItems = (srcText) => {
    srcText = new RegExp(srcText.toLowerCase(), "g");

    // Search Text needs to be at least 3 Char in length
    if (String(srcText).length < 6) return false;

    // sets a new array containing only the Keys of FFXI Items
    const itemKeys = Object.keys(ffxiItems);

    // Loops through Keys and compares Search text with the item name and pushes to array if match
    let searchArr = [];
    itemKeys.forEach((key) => {
      // @@TODO: Figure out why matrimony band breaks the loop due to undefined "en"
      if (ffxiItems[key].category === "Armor" && key !== '15847' && key !== '15848') {
        let itemName = ffxiItems[key].en.toLowerCase();
        if (itemName.match(srcText)) {
          let item = {};
          item.id = key;
          item.name = ffxiItems[key].en;
          item.category = ffxiItems[key].category;
          item.level = ffxiItems[key].level;
          item.slots = ffxiItems[key].slots;
          item.desc = ffxiItemDesc[key].en;
          searchArr.push(item);
        }
      }
    });
    setFilteredItems(searchArr);
  };

  const filteredItemsHandler = (event) => {
    let srcText = String(event.query);
    searchItems(srcText);
  };

  const searchTextHandler = (e)=>{
    setSearchText(e.value)
    props.onSearchText(e.value)
  }

  return (
    <div className="card">
      <h3>Name</h3>
      <AutoComplete
        value={searchText}
        suggestions={filteredItems}
        completeMethod={filteredItemsHandler}
        field="name"
        onChange={searchTextHandler}
      />
    </div>
  );
}

export default GearSearch;
