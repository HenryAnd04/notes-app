
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Settings from './pages/Settings'
import Header from './components/Header'
import NoteDetails from './pages/NoteDetails'

function App() {

  return (
    <>
      <Header/>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/notes' element={<Notes/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/details/:id' element={<NoteDetails/>}/>
      </Routes>
    </>
  )
}

export default App
