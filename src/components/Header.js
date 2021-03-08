import './styles/Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

function Header({userName}) {
    return(
        <div className="header">
            {userName && <img className="logo" src={logo} alt="logo"/>}
            <Link className="link" to="/"><h3>Lost in Translation</h3></Link>
            <div className="user">
                {userName && <Link className="link" to="/profile"><p className="userName">{userName}
                    <FontAwesomeIcon className="icon" icon={faUser}/></p> </Link>}
            </div>
        </div>
    )
}

export default Header;