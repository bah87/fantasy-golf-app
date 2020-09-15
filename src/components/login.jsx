import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      action: 'Login',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.error) {
      return { error: props.error, action: 'Login' };
    }
  }

  render() {
    const { email, password, error, action } = this.state;

    return (
      <div>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => this.handleChange(e, 'email')}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => this.handleChange(e, 'password')}
          />
        </Form.Group>
        <Button
          style={{ marginBottom: '15px' }}
          variant="primary"
          type="submit"
          disabled={!this.isSubmitEnabled()}
          onClick={this.login.bind(this)}
        >
          {action}
        </Button>
        {error && (
          <Alert className="small mb-1" variant="danger">
            {error}
          </Alert>
        )}
      </div>
    );
  }

  handleChange(e, field) {
    this.setState({ [field]: e.currentTarget.value, error: '' });
  }

  isSubmitEnabled() {
    const { email, password } = this.state;
    return email && password;
  }

  login() {
    this.setState({ action: 'Logging in...', error: '' });
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  }
}
