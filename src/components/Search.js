import React from "react";

function Search({filterBy,onFilter}) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default Search;
