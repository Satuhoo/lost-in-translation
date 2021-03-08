import {Link} from "react-router-dom";
import './styles/Login.css';
import logo from '../assets/Logo.png';

function Login({userName, onChangeUserName, submit}) {
    return (
        <div className="container">
            <div className="flex-container">
                <img className="large-logo" src={logo} alt="logo"/>
                <div className="title">
                    <h1>Lost in translation</h1>
                    <h2>Get started</h2>
                </div>
            </div>
            <div className="username-field">
                <input value={userName} onChange={onChangeUserName} placeholder="What's your name?"/>
                <Link to="/">
                    <button onClick={submit}>Arrow</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;