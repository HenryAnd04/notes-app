import { createContext, useState } from "react";

const NotesContext = createContext();

const NotesProviderWrapper = (props) => {
    
    const [notes, setNotes] = useState([
    { id: 1, body: "Primera nota", user: "Henry" },
    { id: 2, body: "Segunda nota", user: "Dasar" }
    ]);
     
    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export {NotesContext, NotesProviderWrapper};