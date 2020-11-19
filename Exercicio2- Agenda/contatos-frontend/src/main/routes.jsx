import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Agenda from '../components/agenda'

export default props => (
    <Router history={hashHistory}>
        <Route path='/agenda' component={Agenda} />
        <Redirect from='*' to='/agenda'/>
    </Router>
)