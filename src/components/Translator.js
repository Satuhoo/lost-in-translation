import { useState } from "react";
import {addToStorage} from '../utils/LocalStorage';

function Translator() {
    const [inputWord, setInputWord] = useState("");
    const [translation, setTranslation] = useState([]);

    const handleInputChange = (event) => {
        setInputWord(event.target.value);
    }

    const translate = (event) => {
        event.preventDefault();
        addToStorage(inputWord);
        let characters = inputWord.toLowerCase().split("");
        let signs = [];
        for (let char in characters) {
            signs.push(require(`../assets/individial_signs/${characters[char]}.png`).default)
        }
        setTranslation(signs);
    }

    return (
        <div>
            <form onSubmit={translate}>
                <input value={inputWord} onChange={handleInputChange} placeholder="Type what you want to translate"></input>
                <button type="submit">Translate</button>
            </form>
            <div>
            {translation.map((sign, index) => <img key={index} src={sign} alt="img" />)}
            </div>
        </div>
    )
}

export default Translator;