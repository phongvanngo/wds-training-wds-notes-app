import React from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";

export default function NoteCard(props) {
  const { notes, addNewNote, deleteNote, editNote } = props;

  return (
    <div>
      <div className="notes-container">
        <CardList notes={notes} deleteNote={deleteNote} editNote={editNote} />
        <CardForm addNewNote={addNewNote} />
      </div>
    </div>
  );
}
