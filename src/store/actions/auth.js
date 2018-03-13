import api from '../../api/api';
import { LOGGED_IN, LOGGED_OUT, } from './index';

const userLoggedIn = (user) => {
  console.log('user', user);
  return {
    type: LOGGED_IN,
    payroll: user,
  };
};

const userLogout = () => ({
  type: LOGGED_OUT,
});


// const login = data => dispatch =>
//   api.user.logins(data).then(res => dispatch(loggedIn(res)));


const login = credentials => dispatch =>
  api.user.login(credentials).then((user) => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });


const logout = () => (dispatch) => {
  localStorage.removeItem('bookwormJWT');
  dispatch(userLogout());
};

export { login, userLoggedIn, logout };// eslint-disable-line
