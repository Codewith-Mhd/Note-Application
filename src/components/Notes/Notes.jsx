import Note from "../Note/Note"
import AddNote from "../AddNote/AddNote"
import "./styles.css"

const Notes = ({notes, addNoteHandler}) => {
  console.log(notes)
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note} id={note.id} text={note.text} date={note.date} />
      ))}

      <AddNote addNoteHandler={addNoteHandler} />
    </div>
  )
}

export default Notes
