import React from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";

export default function NoteCard() {
  return (
    <div>
      <div className="notes-container">
        <CardList />
        <CardForm />
      </div>
    </div>
  );
}
