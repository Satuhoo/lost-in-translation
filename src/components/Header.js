import './styles/Header.css';
import { Link } from 'react-router-dom';

function Header({userName}) {
    return(
        <div className="header">
            <h1>Lost in Translation</h1>
            <div>
            {userName && <Link to="/profile"><p>Hello {userName}</p></Link>}
            </div>
        </div>
    )
}

export default Header;