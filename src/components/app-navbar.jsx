import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class AppNavbar extends React.Component {
  render() {
    const { userName } = this.props;
    return (
      <Navbar bg="light" expand="lg">
        <FontAwesomeIcon style={{ marginRight: '8px' }} icon="golf-ball" />
        <Link to="/leaderboard">
          <Navbar.Brand>Fantasy Golf</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/create-team">Create Team</Link>
            </Nav.Link>
          </Nav>
          {userName ? (
            <Navbar.Text>{`Logged in as ${userName}`}</Navbar.Text>
          ) : (
            <Nav.Link className="mr-sm-2">
              <Link to="/login">Login</Link>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
