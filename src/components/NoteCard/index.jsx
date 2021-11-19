import React from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";

export default function NoteCard(props) {
  const { notes, addNewNote } = props;

  return (
    <div>
      <div className="notes-container">
        <CardList notes={notes} />
        <CardForm addNewNote={addNewNote} />
      </div>
    </div>
  );
}
