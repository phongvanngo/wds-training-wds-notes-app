import React, { useEffect, useState, useRef } from "react";
import { FormatDateTime } from "../../utils";

export default function CardItem(props) {
  const { note, editNote, deleteNote } = props;

  const [isOpenUpdateForm, setIsOpenUpdateForm] = useState(false);

  const handleDeleteNote = () => {
    deleteNote(note.id);
  };
  return (
    <>
      {isOpenUpdateForm ? (
        <UpdateCardForm
          setIsOpenUpdateForm={setIsOpenUpdateForm}
          editNote={editNote}
          note={note}
        />
      ) : (
        <div className="note-item-container">
          <div className="content">{note.content}</div>
          <div className="note-footer">
            <span className="time">{FormatDateTime(note.createdAt)}</span>
            <div className="utilities">
              <div
                onClick={() => {
                  setIsOpenUpdateForm(true);
                }}
              >
                <i className="bx bxs-edit"></i>
              </div>
              <div
                onClick={() => {
                  handleDeleteNote();
                }}
              >
                <i className="bx bx-trash"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function UpdateCardForm({ note, editNote, setIsOpenUpdateForm }) {
  const noteRef = useRef(null);

  useEffect(() => {
    noteRef.current.value = note.content;
    noteRef.current.focus();
  }, []);

  const handleUpdateNote = () => {
    let updatedNote = { ...note };
    updatedNote.content = noteRef.current.value;
    editNote(updatedNote);
    setIsOpenUpdateForm(false);
  };

  return (
    <form
      id="form_update_note"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdateNote();
      }}
    >
      <div className="note-item-container new">
        <div className="content">
          <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
            ref={noteRef}
          ></textarea>
        </div>
        <button type="submit" form="form_update_note" className="save-btn">
          Save
        </button>
      </div>
    </form>
  );
}
