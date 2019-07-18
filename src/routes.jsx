import React from 'react';
import { Switch, Route } from 'react-router-dom';


import LandingLoginForm from './Components/Landing/LandingLoginForm';
import ConditionalLogin from './Components/Landing/ConditionalLogin';


export default (
  <Switch>
    <Route exact path='/' component={ConditionalLogin} />
    <Route path='/login' component={LandingLoginForm} />
  </Switch>
)