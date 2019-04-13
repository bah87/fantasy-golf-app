import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { DetailedStandings } from './detailed-standings';
import { CompactStandings } from './compact-standings';

export class NewStandings extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      isDetailed: true,
      searchText: '',
      dropdown: 'Filter by team'
    };
  }

  async componentDidMount() {
    const teamsResp = await fetch(
      'https://fantasy-golf-server.herokuapp.com/teams'
    );
    const teams = await teamsResp.json();
    this.setState({ teams });
  }

  render() {
    const { isDetailed, teams, dropdown, searchText } = this.state;
    return (
      <div className='d-flex flex-column justify-content-start align-items-center'>
        <ButtonGroup className='my-3'>
          <Button
            onClick={this.setIsDetailed(true)}
            variant={isDetailed ? 'primary' : 'secondary'}
          >
            Detailed
          </Button>
          <Button
            onClick={this.setIsDetailed(false)}
            variant={isDetailed ? 'secondary' : 'primary'}
          >
            Compact
          </Button>
        </ButtonGroup>

        {isDetailed ? (
          <>
            <InputGroup className='mb-3'>
              <DropdownButton
                as={InputGroup.Prepend}
                variant='outline-secondary'
                title={dropdown}
                id='input-group-dropdown-1'
              >
                <Dropdown.Item onClick={this.handleDropdown(true)}>
                  Filter by team
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleDropdown(false)}>
                  Filter by player
                </Dropdown.Item>
              </DropdownButton>
              <FormControl
                value={searchText}
                onChange={this.handlePlayerSearch}
                placeholder={`Ex. ${
                  dropdown === 'Filter by team' ? 'Brendan' : 'Tiger'
                }`}
              />
              <InputGroup.Append>
                <Button
                  onClick={this.clearPlayerSearch}
                  variant='outline-secondary'
                >
                  Clear
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <DetailedStandings
              players={this.props.players}
              teams={teams}
              teamsMap={this.getTeamsMap(teams)}
            />
          </>
        ) : (
          <CompactStandings players={this.props.players} teams={teams} />
        )}
      </div>
    );
  }

  getTeamsMap = teams => {
    const { searchText, dropdown } = this.state;
    const regex = new RegExp(searchText.toLowerCase());
    const teamsMap = {};

    if (dropdown === 'Filter by team') {
      teams.forEach(t => {
        if (regex.test(t.name.toLowerCase())) {
          teamsMap[t.name] = t.name;
        }
      });
    } else {
      teams.forEach(t => {
        if (
          t.players
            .map(id => this.props.players[id].fullName)
            .some(name => regex.test(name.toLowerCase()))
        ) {
          teamsMap[t.name] = t.name;
        }
      });
    }

    return teamsMap;
  };

  setIsDetailed = isDetailed => {
    return () => {
      this.setState({ isDetailed });
    };
  };

  clearPlayerSearch = () => {
    this.setState({ searchText: '' });
  };

  handlePlayerSearch = e => {
    this.setState({ searchText: e.target.value });
  };

  handleDropdown = isTeam => {
    return () => {
      this.setState({ dropdown: `Filter by ${isTeam ? 'team' : 'player'}` });
    };
  };
}
