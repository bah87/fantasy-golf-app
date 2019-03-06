import React from 'react';
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
        <Navbar.Brand href='#home'>Fantasy Golf</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Leaderboard</Nav.Link>
            <Nav.Link href='#link'>Schedule</Nav.Link>
            <NavDropdown title='Fantasy' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Standings</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>My team</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Join challenge
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>
                Create challenge
              </NavDropdown.Item>
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
