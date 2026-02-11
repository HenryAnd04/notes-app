import { useContext } from "react"
import { NotesContext } from "../contexts/notes.context.jsx";
import "./Home.css"
import { Link } from "react-router-dom";

function Home() {
 
    const {notes} = useContext(NotesContext);

    const HTMLnotes = notes.map((note, id) =>{
        return (
          <Link to={`./details/${note.id}`} key={id} className="note-card">
            <h3 className="note-body">{note.body}</h3>
            <span className="note-user">{note.user}</span>
          </Link>
        )
    })
    
  return (
   <div className="home-container">
      <h1>Home Page</h1>
      <h3>Notes Saved</h3>

      <div className="notes-grid">
        {notes && HTMLnotes}
      </div>

    </div>
  )
}

export default Home