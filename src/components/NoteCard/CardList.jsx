import React from "react";
import CardItem from "./CardItem";

export default function CardList(props) {
  const notes = props.notes;
  const deleteNote = props.deleteNote;
  const editNote = props.editNote;

  return (
    <>
      {notes.map((note) => {
        return (
          <CardItem
            key={note.id}
            note={note}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        );
      })}
    </>
  );
}
