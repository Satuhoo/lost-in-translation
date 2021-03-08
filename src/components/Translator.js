import { useState } from "react";
import {addToStorage} from '../utils/storage';
import translate from '../utils/translate';
import {Signs} from './signs/Signs';
import './styles/Translator.css';

function Translator() {
    const [inputWord, setInputWord] = useState("");
    const [translation, setTranslation] = useState([]);

    const handleInputChange = (event) => {
        setInputWord(event.target.value);
    }

    const handleTranslate = (event) => {
        event.preventDefault();
        addToStorage(inputWord);
        let signs = translate(inputWord);
        setTranslation(signs);
    }

    return (
        <div className="translator">
            <form className="input-form" onSubmit={handleTranslate}>
                    <input value={inputWord} onChange={handleInputChange} maxLength={40}
                    placeholder="Type what you want to translate"></input>
                    <button type="submit">Translate</button>
            </form>
            <div className="translator-box-container">
                <Signs translation={translation}/>
            </div>
        </div>
    )
}

export default Translator;