import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <FontAwesomeIcon style={{ marginRight: '8px' }} icon='golf-ball' />
        <Link to='/home'>
          <Navbar.Brand>Fantasy Golf</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/leaderboard'>
              <Nav.Link>Leaderboard</Nav.Link>
            </Link>
            <Link to='/schedule'>
              <Nav.Link>Schedule</Nav.Link>
            </Link>
            <NavDropdown title='Fantasy' id='basic-nav-dropdown'>
              <Link to='/standings'>
                <NavDropdown.Item>Standings</NavDropdown.Item>
              </Link>
              <Link to='/team'>
                <NavDropdown.Item>My team</NavDropdown.Item>
              </Link>
              <Link to='/join-challenge'>
                <NavDropdown.Item>Join challenge</NavDropdown.Item>
              </Link>
              <Link to='/create-challenge'>
                <NavDropdown.Item>Create challenge</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Find player'
              className='mr-sm-2'
            />
            <Button variant='outline-success'>Go</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
