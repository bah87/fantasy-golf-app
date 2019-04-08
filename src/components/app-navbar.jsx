import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <FontAwesomeIcon style={{ marginRight: '8px' }} icon='golf-ball' />
        <Link to='/'>
          <Navbar.Brand>Fantasy Golf</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>
              <Link to='/leaderboard'>Leaderboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/standings'>Standings</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/create-team'>Create Team</Link>
            </Nav.Link>
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
