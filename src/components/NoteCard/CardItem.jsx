import React from "react";
import { FormatDateTime } from "../../utils";

export default function CardItem(props) {
  const { id, content, createdAt, deleteNote } = props;
  const handleDeleteNote = () => {
    deleteNote(id);
  };
  return (
    <div className="note-item-container">
      <div className="content">{content}</div>
      <div className="note-footer">
        <span className="time">{FormatDateTime(createdAt)}</span>
        <div className="utilities">
          <div>
            <i className="bx bxs-edit"></i>
          </div>
          <div
            onClick={() => {
              handleDeleteNote();
            }}
          >
            <i className="bx bx-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
