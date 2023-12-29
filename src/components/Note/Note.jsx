import {MdDeleteForever} from "react-icons/md"
import "./styles.css"

const Note = ({id, text, date}) => {
  return (
    <div className="note">
      <span>{text} </span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever size="1.4em" className="delete-icon" />
      </div>
    </div>
  )
}

export default Note
