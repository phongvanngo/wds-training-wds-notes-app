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
    const newNotes = notes.filter((note) => note.content.includes(keyword));
    setFilteredNote(newNotes);
  };

  const addNewNote = (note) => {
    let newNotes = [...notes];
    newNotes.push(note);
    setNotes(newNotes);
    saveToLocalStorage("notes", newNotes);
  };

  const deleteNote = (note_id) => {
    let newNotes = notes.filter((note) => note.id !== note_id);
    setNotes(newNotes);
    saveToLocalStorage("notes", newNotes);
  };

  const searchNote = (keyword) => {
    setSearchKeyword(keyword);
  };

  const editNote = (noteToEdit) => {
    const index = notes.findIndex((note) => note.id === noteToEdit.id);
    let newNotes = [...notes];
    newNotes[index] = noteToEdit;
    setNotes(newNotes);
    saveToLocalStorage("notes", newNotes);
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
        editNote={editNote}
        notes={filteredNote}
        addNewNote={addNewNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
