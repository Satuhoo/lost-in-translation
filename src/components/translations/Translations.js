import '../styles/Translator.css';
import '../styles/Profile.css';
import Sign from './Sign';

export const TranslationWithWord = ({translation}) => {
    return (
        <div className="single-translation">
            <p className="stored-input">{translation.input}</p>
            {translation.signs.map((sign, index) => <Sign key={index} sign={sign} className="sign-profile"/>)}
        </div>
    )
}

export const Translation = ({translation}) => {
    return (
        <div className="translation-box">
            {translation.length === 0 && <p>Nothing to translate.</p>}
            {translation.map((sign, index) => <Sign key={index} sign={sign} className="sign"/>)}
        </div>
    )
}