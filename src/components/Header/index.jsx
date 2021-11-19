import React from "react";

export default function Header() {
  return (
    <div className="header">
      <h1>Notes</h1>
      <div className="dark-mode">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span> Dark mode</span>
      </div>
    </div>
  );
}
