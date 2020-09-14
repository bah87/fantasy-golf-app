import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
    };
  }

  render() {
    const { name, email, password, error } = this.state;

    return (
      <div>
        <Form.Group controlId="formBasicName">
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => this.handleChange(e, 'name')} />
        </Form.Group>
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
          onClick={this.signup.bind(this)}
        >
          Sign Up
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
    const { email, name, password } = this.state;
    return email && name && password;
  }

  signup() {
    if (this.isEmailValid()) {
      console.log('signing up....');
      const { email, name, password } = this.state;
      fetch('https://fantasy-golf-server.herokuapp.com/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      }).then((res) => {
        console.log('signup response', res);
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
