import {Link} from "react-router-dom";
import translate from "../utils/translate";
import {fetchTranslations} from '../utils/storage';
import {SignsWithInput} from './signs/Signs';

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
            <h1>Profile</h1>
            <p>Your last translations</p>
            {translations.map((translation, index) => <SignsWithInput key={index} translation={translation}/>)}
            <Link to="/"><button onClick={logOut}>LogOut</button></Link>
        </div>
    )
}

export default Profile;