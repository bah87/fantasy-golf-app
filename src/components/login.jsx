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
      </div>
    );
  }

  handleChange(e, field) {
    this.setState({ [field]: e.currentTarget.value });
  }

  isSubmitEnabled() {
    const { email, password } = this.state;
    return email && password;
  }

  login() {
    console.log('logging in....');
    const { email, password } = this.state;
    fetch('https://fantasy-golf-server.herokuapp.com/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, remember: true }),
    }).then((res) => {
      console.log('login response', res);
      res.json().then((data) => console.log('login data', data));
      this.props.onLogin();
    });
  }
}
