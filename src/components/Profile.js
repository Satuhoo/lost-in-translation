import {Link} from "react-router-dom";
import translate from "../utils/translate";
import {fetchTranslations} from '../utils/storage';
import {TranslationWithWord} from './translations/Translations';
import './styles/Profile.css';
import logoHello from '../assets/Logo-Hello.png';

function Profile({logOut}) {
    let storedInputs = fetchTranslations(); //Calls the method which fetchs translations from local storage
    
    const showLatestTranslations = () => {
        let storedTranslations = [];
        //Iterates the list of stored input words, translates them and saves to the list
        for (let input in storedInputs) {
            let signs = translate(storedInputs[input]);
            const translation = {
                input: storedInputs[input],
                signs: signs
            }
            storedTranslations.push(translation);
        }
        return storedTranslations;
    }

    let translations = showLatestTranslations();

    return (
        <div>
            <div className="profile-flex-container">
                <div>
                    <h1>Profile</h1>
                    <Link to="/"><button className="logout-btn" onClick={logOut}>Log out</button></Link>
                </div>
            <img className="logo-hello" src={logoHello} alt="logo"/>
            </div>
            <p className="latest-translations-title">Your latest translations</p> 
            <div>
                {translations.map((translation, index) => <TranslationWithWord key={index} translation={translation}/>)}
            </div>
        </div>
    )
}

export default Profile;