import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NotesProviderWrapper } from './contexts/notes.context'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,

  <NotesProviderWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>

  </NotesProviderWrapper>
 
)
