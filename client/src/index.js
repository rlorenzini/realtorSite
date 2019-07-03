import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import BaseLayout from './components/BaseLayout';
import HomePage from './components/HomePage';
import Login from './components/Login';

import * as serviceWorker from './serviceWorker';
const store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// setAuthenticationHeader(localStorage.getItem('jsonwebtoken'))

ReactDOM.render(

    <BrowserRouter>
      <BaseLayout>
      <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/login' component={Login} />
      </Switch>
      </BaseLayout>
    </BrowserRouter>

  ,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
