import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import "./stylemodule.css";
import { useState } from "react";

function App() {
  const [currentNote, setCurrentNote] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [currentEditedNote, setCurrentEditedNote] = useState(null);
  return (
    <div className="App">
      <div className="head">To Do List</div>
      <AddNote
        currentNote={currentNote}
        notesList={notesList}
        setNotesList={setNotesList}
        setCurrentNote={setCurrentNote}
        currentEditedNote={currentEditedNote}
        setCurrentEditedNote={setCurrentEditedNote}
      ></AddNote>
      <NoteList
        notesList={notesList}
        setCurrentEditedNote={setCurrentEditedNote}
        setCurrentNote={setCurrentNote}
        setNotesList={setNotesList}
      ></NoteList>
    </div>
  );
}

export default App;
