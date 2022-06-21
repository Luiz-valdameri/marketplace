import React from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from 'react-router-dom';
import Home from './screens/home';

export default function Routes() {

    return (
        <Router >
            <Switch>
                <Route exact path="/" element={<Home />} />
            </Switch>
        </Router >
    );
}
