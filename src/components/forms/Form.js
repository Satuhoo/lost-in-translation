import {Link} from "react-router-dom";
import '../styles/Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faKeyboard} from '@fortawesome/free-solid-svg-icons';

const Form = (props) => {
    return(
        <form>
            <FontAwesomeIcon className="icon-keyboard" icon={faKeyboard}/>
            <input value={props.value} onChange={props.handleChangeValue} placeholder={props.placeholder}/>
            <Link to={props.path}>
                <button className="submit-btn" onClick={props.submit}>
                    <FontAwesomeIcon className="icon-arrow" icon={faArrowRight}/>
                </button>
            </Link>
        </form>
    )
}

export default Form;