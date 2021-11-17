import React from "react";

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <i className="bx bx-search"></i>
        <input placeholder="Search..." />
      </div>
    </div>
  );
}
