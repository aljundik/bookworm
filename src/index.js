import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, } from 'redux';
import { Provider, } from 'react-redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import { composeWithDevTools, } from 'redux-devtools-extension';
import authReducer from './store/reducers/authReducer';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* eslint no-underscore-dangle: 0 */

const rootReducer = combineReducers({
  authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
