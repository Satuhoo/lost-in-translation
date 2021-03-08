import { useState } from "react";
import {addToStorage} from '../../utils/storage';
import translate from '../../utils/translate';
import {Translation} from '../translations/Translations';
import Form from '../forms/Form';
import '../styles/Translator.css';

function Translator() {
    const [inputWord, setInputWord] = useState("");
    const [translation, setTranslation] = useState([]);

    const handleInputChange = (event) => {
        setInputWord(event.target.value);
    }

    //Checks if the input word is not empty string, saves it to storage and calls translate method
    const handleTranslate = (event) => {
        event.preventDefault();
        if (inputWord !== "") {
            addToStorage(inputWord);
            let signs = translate(inputWord);
            setTranslation(signs);
        }
        setInputWord("");
    }

    return (
        <div className="translator">
            <div className="form-container-translator">
            <Form value={inputWord} handleChangeValue={handleInputChange} placeholder="Type what you want to translate"
                submit={handleTranslate} path="#"/>
            </div>
            <div className="translator-box-container">
                <Translation translation={translation}/>
            </div>
        </div>
    )
}

export default Translator;