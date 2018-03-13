import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, } from 'redux';
import { Provider, } from 'react-redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import { composeWithDevTools, } from 'redux-devtools-extension';
import authReducer from './store/reducers/authReducer';
import { userLoggedIn, } from './store/actions/auth';


import App from './App';
import registerServiceWorker from './registerServiceWorker';


/* eslint no-underscore-dangle: 0 */

const rootReducer = combineReducers({
  authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
if (localStorage.bookwormJWT) {
  const user = { token: localStorage.bookwormJWT, };
  store.dispatch(userLoggedIn(user));
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
