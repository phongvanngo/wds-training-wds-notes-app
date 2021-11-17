import React from "react";

export default function CardItem() {
  return (
    <div className="note-item-container">
      <div className="content">This is my notes !!</div>
      <div className="note-footer">
        <span className="time">12:30 12/2/2015</span>
        <div className="utilities">
          <div>
            <i className="bx bxs-edit"></i>
          </div>
          <div>
            <i className="bx bx-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
