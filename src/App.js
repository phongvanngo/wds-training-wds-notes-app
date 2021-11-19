import "./App.css";
import NoteCard from "./components/NoteCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

const data = [
  {
    id: 1,
    content: "coding",
    createdAt: new Date(),
  },
  {
    id: 2,
    content: "noteeeee",
    createdAt: new Date(),
  },
  {
    id: 3,
    content: "sleep",
    createdAt: new Date(),
  },
];

function App() {
  const [notes, setNotes] = useState(data);

  const addNewNote = (note) => {
    let new_notes = [...notes];
    new_notes.push(note);
    setNotes(new_notes);
  };

  const deleteNote = (note_id) => {
    console.log(note_id);
    let new_notes = notes.filter((note) => note.id !== note_id);
    setNotes(new_notes);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <NoteCard notes={notes} addNewNote={addNewNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
