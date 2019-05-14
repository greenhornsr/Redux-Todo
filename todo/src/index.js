import React from 'react';
import ReactDOM from 'react-dom';

// importing redux create store from redux, Provider from react-redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//  importing reducer
import reducer from './reducers/reducer'

import './index.css';
import App from './App';

// importing BrowserRouter from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));