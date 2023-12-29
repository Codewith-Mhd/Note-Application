import "./styles.css"
import Notes from "././components/Notes/Notes"
import {useState} from "react"

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "This is the first note!",
      date: "7/10/2023"
    },
    {
      id: 2,
      text: "This is the second note!",
      date: "8/10/2023"
    },
    {
      id: 3,
      text: "This is the third note!",
      date: "23/3/2023"
    }
  ])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: 4,
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <Notes notes={notes} addNoteHandler={addNote} />
      <h2>Note footer</h2>
    </div>
  )
}
