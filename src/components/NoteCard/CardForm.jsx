import React, { useRef } from "react";

export default function CardForm({ addNewNote }) {
  const handleAddNewNote = () => {
    const content = noteRef.current.value;
    const createdAt = Date.now();
    const new_note = { content: content, createdAt: createdAt };
    addNewNote(new_note);
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
