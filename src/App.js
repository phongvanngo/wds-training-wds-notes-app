import "./App.css";
import NoteCard from "./components/NoteCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <NoteCard />
    </div>
  );
}

export default App;
