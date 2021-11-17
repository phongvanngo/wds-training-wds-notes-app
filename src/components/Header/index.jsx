import React from "react";

export default function Header() {
  return (
    <div className="header">
      <h1>Notes</h1>
      <div className="dark-mode">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <span> Dark mode</span>
      </div>
    </div>
  );
}
