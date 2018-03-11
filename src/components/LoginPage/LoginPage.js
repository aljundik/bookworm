import React from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

import LoginForm from '../Forms/LoginForm';
import { login, } from '../../store/actions/auth';

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push('/'));
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>);
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired, }).isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   login: (data) => { dispatch(login(data)); },
// });

export default connect(null, { login, })(LoginPage);
