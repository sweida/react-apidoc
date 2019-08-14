import React, { Component } from 'react';
// import './App.css';
import './assets/css/argon-1.0.css'
import './assets/vendor/nucleo/css/nucleo.css'
import './assets/vendor/font-awesome/css/font-awesome.min.css'

import { BrowserRouter, Route } from 'react-router-dom'
import router from './router/router'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {
            router.map((page, index) => page.component ?
              <Route key={index} exact path={page.path} component={page.component} /> : "")
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;