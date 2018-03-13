import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout, } from '../../store/actions/auth';

const HomePage = props => (
  <div>
    <h1>HomePage</h1>
    {props.isAuthenticated ? <button onClick={props.onLogout}>Logout</button> : <Link to="/login"> Login</Link>}
  </div>);


HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isAuthenticated: !!state.authReducer.user.token,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
