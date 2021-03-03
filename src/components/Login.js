import {Link} from "react-router-dom";

function Login({userName, onChangeUserName, submit}) {
    return (
        <div>
            <h2>Lost in translation</h2>
            <h3>Get started</h3>
                <input value={userName} onChange={onChangeUserName} placeholder="What's your name?"/>
                <Link to="/translator">
                    <button onClick={submit}>Arrow</button>
                </Link>
        </div>
    )
}

export default Login;