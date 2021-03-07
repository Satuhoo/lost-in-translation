import { useState } from "react";
import {addToStorage} from '../utils/storage';
import translate from '../utils/translate';
import {Signs} from './signs/Signs';

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
        <div>
            <form onSubmit={handleTranslate}>
                <input value={inputWord} onChange={handleInputChange} placeholder="Type what you want to translate"></input>
                <button type="submit">Translate</button>
            </form>
            <Signs translation={translation}/>
        </div>
    )
}

export default Translator;