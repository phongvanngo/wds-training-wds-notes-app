import React, { useState } from "react";

export default function SearchBar({ searchNote }) {
  const [value, setValue] = useState("");

  const handleSearch = (keyword) => {
    searchNote(keyword);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <i className="bx bx-search"></i>
        <input placeholder="Search..." value={value} onChange={handleChange} />
      </div>
    </div>
  );
}
