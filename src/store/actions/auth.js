import api from '../../api/api';
import { LOGGED_IN, } from './index';

const userLoggedIn = data => ({
  type: LOGGED_IN,
  payrol: data,
});


// const login = data => dispatch =>
//   api.user.logins(data).then(res => dispatch(loggedIn(res)));


const login = credentials => dispatch =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

export { login, };// eslint-disable-line
