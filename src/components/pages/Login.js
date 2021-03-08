import logo from '../../assets/Logo.png';
import Form from '../forms/Form';
import '../styles/Login.css';

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
            <div className="form-container">
                <Form path="/" value={userName} handleChangeValue={onChangeUserName} placeholder="What's your name?" submit={submit}/>
            </div>
        </div>
    )
}

export default Login;