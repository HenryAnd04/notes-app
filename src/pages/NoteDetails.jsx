// import React, { useContext, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { NotesContext } from '../contexts/notes.context';
import "./NoteDetails.css"

// function NoteDetails() {
//     const [editNote, setEditNote] = useState('');
//     const {id} = useParams()
//     const {notes} = useContext(NotesContext);
    
//     const foundNote = notes.find(note => note.id === Number(id))

//     const handleEditNote = (e) => {
//         setEditNote(e.target.value)        
//         console.log(editNote);
        
//     }
        
//   return (
//     <div>
//             <div className="notes-grid">
//                     <div className="note-card">
//                     <h3 className="note-body">{foundNote.body}</h3>
//                     <span className="note-user">{foundNote.user}</span>
//             </div>
            
//         </div>
//         <input type="text" name='note'/>

//         <button>Delete note</button>
//         <button>Saved</button>

//     </div>
//   )
// }

// export default NoteDetails
import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { NotesContext } from '../contexts/notes.context'
import "./NoteDetails.css"

function NoteDetails() {

    const { id } = useParams()
    const navigate = useNavigate()
    const { notes, setNotes } = useContext(NotesContext)

    const foundNote = notes.find(note => note.id === Number(id))

    const [editText, setEditText] = useState("")

    // Cuando foundNote cambia, cargamos el texto al input
    useEffect(() => {
        if (foundNote) {
            setEditText(foundNote.body)
        }
    }, [foundNote])

    if (!foundNote) return <p>Nota no encontrada</p>

    // Guardar cambios
    const handleSave = () => {

        const updatedNotes = notes.map(note =>
            note.id === Number(id)
                ? { ...note, body: editText }
                : note
        )

        setNotes(updatedNotes)
        navigate("/")
    }

    // Eliminar nota
    const handleDelete = () => {

        const filteredNotes = notes.filter(note =>
            note.id !== Number(id)
        )

        setNotes(filteredNotes)
        navigate("/notes")
    }

    return (
        <div className="notes-grid">

            <h2>Edit Note</h2>

            <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
            />
            <span>{foundNote.user}</span>

            <div className="buttons">
                <button onClick={handleSave} className="save-btn">
                    Save
                </button>

                <button onClick={handleDelete} className="delete-btn">
                    Delete
                </button>
            </div>

        </div>
    )
}

export default NoteDetails