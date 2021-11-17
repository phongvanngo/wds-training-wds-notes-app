import React from "react";

export default function CardForm() {
  return (
    <div>
      <div className="note-item-container new">
        <div className="content">
          <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
          ></textarea>
        </div>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
}
