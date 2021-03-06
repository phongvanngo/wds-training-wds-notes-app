import React, { useRef } from "react";
import { generateId } from "../../utils";

export default function CardForm({ addNewNote }) {
  const handleAddNewNote = () => {
    const content = noteRef.current.value;
    const createdAt = Date.now();
    const id = generateId();
    const new_note = { id: id, content: content, createdAt: createdAt };
    addNewNote(new_note);
    noteRef.current.value = "";
  };
  const noteRef = useRef(null);
  return (
    <form
      id="form_add_new_note"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddNewNote();
      }}
    >
      <div className="note-item-container new">
        <div className="content">
          <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
            ref={noteRef}
          ></textarea>
        </div>
        <button type="submit" form="form_add_new_note" className="save-btn">
          Save
        </button>
      </div>
    </form>
  );
}
