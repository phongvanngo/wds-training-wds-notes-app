import React from "react";
import CardItem from "./CardItem";

export default function CardList(props) {
  const notes = props.notes;

  return (
    <>
      {notes.map((note) => {
        const { id, content, createdAt } = note;
        return <CardItem key={id} content={content} createdAt={createdAt} />;
      })}
    </>
  );
}
