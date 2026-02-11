import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <header>
        <Link to="/" className='title'>Notes App</Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>            
            <Link to="/settings">Setting</Link>            
        </nav>
    </header>
  )
}

export default Header