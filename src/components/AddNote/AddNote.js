import "./styles.css"
import {useState} from "react"

const AddNote = ({addNoteHandler}) => {
  const [noteText, setNoteText] = useState("")
  const characterLimit = 200
  const changeHandler = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value)
    }
  }
  const saveHandler = () => {
    if (noteText.trim().length > 0) {
      addNoteHandler(noteText)
      setNoteText(" ")
    }
  }
  return (
    <div className="note add_note">
      <textarea
        rows="5"
        vlaue={noteText}
        onChange={changeHandler}
        cols="30"
        placeholder="Create a New Note..."
      ></textarea>
      <div className="add_footer">
        <small>{characterLimit - noteText.length} Remining</small>
        <button onClick={saveHandler} className="save">
          Save
        </button>
      </div>
    </div>
  )
}
export default AddNote
