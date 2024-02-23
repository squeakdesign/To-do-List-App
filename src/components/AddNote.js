import "../stylemodule.css";

function AddNote({
  currentNote,
  setCurrentNote,
  notesList,
  setNotesList,
  currentEditedNote,
  setCurrentEditedNote,
}) {
  console.log(currentNote, setCurrentNote, notesList);

  function handleNoteOnSubmit(event) {
    event.preventDefault();
    if (!!currentEditedNote) {
      const findCurrentEditedNoteIndex = notesList.findIndex(
        (item) => item.id === currentEditedNote.id
      );

      console.log(findCurrentEditedNoteIndex);
      notesList[findCurrentEditedNoteIndex] = {
        ...notesList[findCurrentEditedNoteIndex],
        label: currentNote,
      };
    } else {
      notesList.push({
        id: notesList.length + 1,
        label: currentNote,
      });
    }

    setNotesList(notesList);
    setCurrentNote("");
    setCurrentEditedNote(null);
  }

  return (
    <form onSubmit={handleNoteOnSubmit} className="form">
      <input
        name="current-note"
        id="current-note"
        placeholder="Enter note"
        className="input"
        value={currentNote || ""}
        onChange={(event) => setCurrentNote(event.target.value)}
      />
      <button type="submit" className="button">
        {!!currentEditedNote ? "Edit Note" : "Add Note"}
      </button>
    </form>
  );
}

export default AddNote;
