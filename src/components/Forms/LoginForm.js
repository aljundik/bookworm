import React from 'react';
import { Form, Button, Message, } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';

import InlineValidate from './InlineValidate/InlineValidate';
// set up the loading component from semantic library

class LoginForm extends React.Component {
    state = {
      data: {
        email: '',
        password: '',
      },
      loading: false,
      errors: {},

    };

    onChange = (e) => {
      this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value, },
      });
    }

    onSubmit = () => {
      const errors = this.validate(this.state.data);
      this.setState({ errors, });
      if (Object.keys(errors).length === 0) {
        this.setState({ loading: true, });
        this.props
          .submit(this.state.data)
          .catch(err =>
            this.setState({ errors: err.response.data.errors, loading: false, }));
      }
    };

    validate= (data) => {
      const errors = {};
      const { email, password, } = data;
      if (!Validator.isEmail(email)) errors.email = 'Email is invalid';
      if (password.length < 1) errors.passowrd = "Password shouldn't be embty";

      return errors;
    }

    render() {
      const { data, errors, loading, } = this.state;
      return (
        <Form onSubmit={this.onSubmit} loading={loading}>
          {errors.global &&
          <Message negative>
            <Message.Header>Somthing Went Wrong</Message.Header>
            {errors.global }
          </Message>}
          <Form.Field error={!!errors.email}>
            <label htmlFor="email"> Email
              <input
                id="email"
                type="email"
                placeholder="example@example.com"
                name="email"
                value={data.email}
                onChange={this.onChange}
              />
            </label>
            { errors.email && <InlineValidate error={errors.email} /> }
          </Form.Field>
          <Form.Field error={!!errors.email}>
            <label htmlFor="password"> Password
              <input
                id="password"
                type="password"
                placeholder="secure Email"
                name="password"
                value={data.passowrd}
                onChange={this.onChange}
              />
            </label>
            { errors.passowrd && <InlineValidate error={errors.passowrd} /> }
          </Form.Field>
          <Button primary> Login </Button>

        </Form>
      );
    }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
