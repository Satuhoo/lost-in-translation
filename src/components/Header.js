import './styles/Header.css';
import { Link } from 'react-router-dom'

function Header({userName, loggedIn}) {
    return(
        <div className="header">
            <h1>Lost in Translation</h1>
            <div>
            {loggedIn && <Link to="/profile"><p>Hello {userName}</p></Link>}
            </div>
        </div>
    )
}

export default Header;