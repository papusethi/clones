import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import dummyData from "../../const/Searchdata";
import "./SearchInputBar.css";
const SearchInputBar = () => {
  const [SearchItem, setSearchItem] = useState();
  const [filteredItem, setFilteredItem] = useState(null);
  const getSuggestions = (e) => {
    let results = dummyData.filter((item) => {
      console.log(item.startsWith(e.query));
      return item.toLocaleLowerCase().startsWith(e.query.toLowerCase());
    });
    setFilteredItem(results);
  };
  return (
    <span className="p-input-icon-right">
      <AutoComplete
        className="search-bar"
        inputClassName="search-bar-input"
        value={SearchItem}
        suggestions={filteredItem}
        completeMethod={getSuggestions}
        onChange={(e) => setSearchItem(e.value)}
        placeholder="Search resources"
      />
      <i className="pi pi-search"></i>
    </span>
  );
};

export default SearchInputBar;
