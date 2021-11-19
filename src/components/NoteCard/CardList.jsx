import React from "react";
import CardItem from "./CardItem";

export default function CardList(props) {
  const notes = props.notes;
  const deleteNote = props.deleteNote;

  return (
    <>
      {notes.map((note) => {
        const { id, content, createdAt } = note;
        return (
          <CardItem
            key={id}
            content={content}
            createdAt={createdAt}
            id={id}
            deleteNote={deleteNote}
          />
        );
      })}
    </>
  );
}
