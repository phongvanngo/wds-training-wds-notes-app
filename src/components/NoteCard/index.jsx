import React from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";

export default function NoteCard(props) {
  const { notes, addNewNote, deleteNote } = props;

  return (
    <div>
      <div className="notes-container">
        <CardList notes={notes} deleteNote={deleteNote} />
        <CardForm addNewNote={addNewNote} />
      </div>
    </div>
  );
}
