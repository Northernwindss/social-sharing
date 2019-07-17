import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingLoginForm from './Components/Landing/LandingLoginForm';


export default (
  <Switch>
    <Route exact path='/' component={LandingLoginForm} />
  </Switch>
)