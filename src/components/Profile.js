import {Link} from "react-router-dom";

function Profile({logOut}) {
    return (
        <div>
            <h1>Profile</h1>
            <Link to="/"><button onClick={logOut}>LogOut</button></Link>
        </div>
    )
}

export default Profile;