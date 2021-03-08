import '../styles/Translator.css';
import '../styles/Profile.css'

export const SignsWithInput = ({translation}) => {
    return (
        <div className="single-translation">
            <p className="stored-input">{translation.input}</p>
            {translation.signs.map((sign, index) => <img className="sign-profile" key={index} src={sign} alt="img"/>)}
        </div>
    )
}

export const Signs = ({translation}) => {
    return (
        <div className="translation-box">
            {translation.map((sign, index) => <img className="sign" key={index} src={sign} alt="img" />)}
        </div>
    )
}