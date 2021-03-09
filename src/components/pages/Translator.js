import { useState } from "react";
import {addToStorage} from '../../utils/storage';
import translate from '../../utils/translate';
import {Translation} from '../translations/Translations';
import Form from '../forms/Form';
import '../styles/Translator.css';

function Translator() {
    const [inputWord, setInputWord] = useState("");
    const [translation, setTranslation] = useState([]);
    const [translatedWord, setTranslatedWord] = useState("");
    const [showInfoMessage, setShowInfoMessage] = useState(false);

    const handleInputChange = (event) => {
        setInputWord(event.target.value);
    }

    //Checks if the input word is not empty string, saves it to storage and calls translate method
    const handleTranslate = (event) => {
        event.preventDefault();
        setShowInfoMessage(false);
        if (inputWord !== "") {
            addToStorage(inputWord);
            let signs = translate(inputWord);
            setTranslation(signs);
            setTranslatedWord(inputWord);
        }
        checkSpecialCharacters(inputWord)
        setInputWord("");
    }

    //Checks if there is special characters or numbers in the input word
    const checkSpecialCharacters = (inputWord) => {
        //Replaces all whitespaces so they are not counting for special characters
        let word = inputWord.replaceAll(" ", "");
        if (word.match("[^A-Za-z]")) {
            //Sets infomessage to shown if there is something else than regular letters in the input word
            setShowInfoMessage(true); 
        }
    }

    return (
        <div className="translator">
            <div className="form-container-translator">
            <Form value={inputWord} handleChangeValue={handleInputChange} placeholder="Type what you want to translate"
                submit={handleTranslate} path="#"/>
            </div>
            {translation.length > 0 && <p className="translated-word">Translated: {translatedWord}</p>}
            {showInfoMessage && <p className="info-msg">
                NB! You can't translate numbers or special characters. All letters in entered word/sentence have translated
                </p>}
            <div className="translator-box-container">
                <Translation translation={translation} translatedWord={translatedWord}/>
            </div>
        </div>
    )
}

export default Translator;