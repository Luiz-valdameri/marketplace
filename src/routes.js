import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Navigate
} from 'react-router-dom';
import AuthContext from './contexts/auth';
import Home from './screens/home';
import Login from './screens/login';

export default function Routes() {

    const Private = ({ children }) => {

        const auth = useContext(AuthContext);

        return auth.isLoggedIn() ? children : <Navigate to="/login" />
    }

    return (
        <Router >
            <Switch>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Private><Home /></Private>} />
            </Switch>
        </Router >
    );
}
