import "./App.css";
import NoteCard from "./components/NoteCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "./utils/localStorage";

function App() {
  const [notes, setNotes] = useState([]);
  const [filteredNote, setFilteredNote] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const filterNoteByKeyword = (keyword) => {
    const new_notes = notes.filter((note) => note.content.includes(keyword));
    setFilteredNote(new_notes);
  };

  const addNewNote = (note) => {
    let new_notes = [...notes];
    new_notes.push(note);
    setNotes(new_notes);
    saveToLocalStorage("notes", new_notes);
  };

  const deleteNote = (note_id) => {
    let new_notes = notes.filter((note) => note.id !== note_id);
    setNotes(new_notes);
    saveToLocalStorage("notes", new_notes);
  };

  const searchNote = (keyword) => {
    setSearchKeyword(keyword);
  };

  useEffect(() => {
    filterNoteByKeyword(searchKeyword);
  }, [notes, searchKeyword]);

  useEffect(() => {
    const data = getFromLocalStorage("notes");
    if (data) {
      setNotes(data);
      setFilteredNote(data);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar searchNote={searchNote} />
      <NoteCard
        notes={filteredNote}
        addNewNote={addNewNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
