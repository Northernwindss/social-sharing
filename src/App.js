import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import routes from './routes'
// import Axios from 'axios';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <p>fake header</p> */}
      {routes}
    </div>
  );
}

export default (withRouter(App));
