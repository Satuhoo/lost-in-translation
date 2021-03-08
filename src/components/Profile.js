import {Link} from "react-router-dom";
import translate from "../utils/translate";
import {fetchTranslations} from '../utils/storage';
import {SignsWithInput} from './signs/Signs';
import './styles/Profile.css';
import logoHello from '../assets/Logo-Hello.png';

function Profile({logOut}) {
    let storedInputs = fetchTranslations();
    
    const showLatestTranslations = () => {
        let storedTranslations = [];
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
                {translations.map((translation, index) => <SignsWithInput key={index} translation={translation}/>)}
            </div>
        </div>
    )
}

export default Profile;