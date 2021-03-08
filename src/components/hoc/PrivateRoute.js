import { Route, Redirect } from 'react-router-dom';
import {storage } from '../../utils/storage'; 

const PrivateRoute = props => {
    const userName = storage.getItem("userName");

    if (userName === null || userName === "") {
        return <Redirect to="/Login"/>
    }
    return <Route {...props} />
}

export default PrivateRoute;