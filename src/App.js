import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Notes</h1>
        <div className="dark-mode">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <span> Dark mode</span>
        </div>
      </div>
      <div className="search-bar-container">
        <div className="search-bar">
          <i className="bx bx-search"></i>
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="notes-container">
        <div className="note-item-container">
          <div className="content">This is my notes !!</div>
          <div className="note-footer">
            <span className="time">12:30 12/2/2015</span>
            <div className="utilities">
              <div>
                <i className="bx bxs-edit"></i>
              </div>
              <div>
                <i className="bx bx-trash"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="note-item-container">
          <div className="content">This is my notes !!</div>
          <div className="note-footer">
            <span className="time">12:30 12/2/2015</span>
            <div className="utilities">
              <div>
                <i className="bx bxs-edit"></i>
              </div>
              <div>
                <i className="bx bx-trash"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="note-item-container">
          <div className="content">This is my notes !!</div>
          <div className="note-footer">
            <span className="time">12:30 12/2/2015</span>
            <div className="utilities">
              <div>
                <i className="bx bxs-edit"></i>
              </div>
              <div>
                <i className="bx bx-trash"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="note-item-container new">
          <div className="content">
            <textarea
              rows="8"
              cols="10"
              placeholder="Type to add a note..."
            ></textarea>
          </div>
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default App;
