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
    };
  }

  render() {
    const { email, password, error } = this.state;

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
          Login
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
    const newState = { [field]: e.currentTarget.value };

    if (field === 'email') {
      newState.error = '';
    }

    this.setState(newState);
  }

  isSubmitEnabled() {
    const { email, password } = this.state;
    return email && password;
  }

  login() {
    if (this.isEmailValid()) {
      console.log('logging in....');
      const { email, password } = this.state;
      fetch('https://fantasy-golf-server.herokuapp.com/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }).then((res) => {
        console.log('login response', res);
      });
    } else {
      this.setState({ error: 'Please enter a valid email' });
    }
  }

  isEmailValid() {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) {
      return true;
    }

    return false;
  }
}
