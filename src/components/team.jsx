import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPlayer } from '../util/player';

const plusIcon = () => <FontAwesomeIcon icon='plus-circle' />;
const minusIcon = () => <FontAwesomeIcon icon='minus-circle' />;

const getColDefs = type => {
  return [
    {
      headerName: 'PLAYER',
      field: 'fullName',
      width: 150,
      cellStyle: { textAlign: 'start' }
    },
    { headerName: 'SALARY', field: 'salary', width: 90 },
    {
      width: 40,
      cellStyle: { cursor: 'pointer' },
      cellRendererFramework: type === 'players' ? plusIcon : minusIcon
    }
  ];
};

export class Team extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      team: [],
      name: ''
    };
  }

  async componentDidMount() {
    // get player data
    const fieldResp = await fetch(
      'https://statdata.pgatour.com/r/014/field.json'
    );
    const fieldData = await fieldResp.json();
    const playerMap = {};
    fieldData.Tournament.Players.forEach(playerParams => {
      const player = getPlayer(playerParams);
      playerMap[player.id] = player;
    });

    // get player salaries
    const salaryResp = await fetch(
      'https://fantasy-golf-server.herokuapp.com/salaries'
    );
    const salaryData = await salaryResp.json();
    salaryData.forEach(player => {
      if (playerMap[player.player_id]) {
        playerMap[player.player_id].salary = player.salary;
      } else {
        // update ids in db to be strings
        playerMap['0' + player.player_id].salary = player.salary;
      }
    });

    // update state
    this.setState({ players: Object.values(playerMap) });
  }

  render() {
    const { name, players, team } = this.state;

    return (
      <div className='d-flex flex-column align-items-center justify-content-start'>
        <Form.Group>
          <Form.Control
            onChange={this.handleName}
            value={name}
            type='name'
            placeholder='Enter full name'
          />
        </Form.Group>
        <div className='d-flex flex-row align-items-start justify-content-around w-100 mt-5'>
          <div
            className='ag-theme-balham'
            style={{
              height: '400px',
              width: '280px'
            }}
          >
            <AgGridReact
              columnDefs={getColDefs('players')}
              rowData={players.sort((a, b) => b.salary - a.salary)}
              onCellClicked={this.handlePlayerAdded}
            />
          </div>
          <div className='d-flex flex-column align-items-center justify-content-start ml-3'>
            <div
              className='ag-theme-balham'
              style={{
                height: '200px',
                width: '280px'
              }}
            >
              <AgGridReact
                columnDefs={getColDefs('team')}
                rowData={team}
                onCellClicked={this.handlePlayerRemoved}
              />
            </div>
            <div className='d-flex flex-row align-items-center justify-content-around w-100 mt-4'>
              <Button onClick={this.clearTeam} size='sm' variant='secondary'>
                Clear team
              </Button>
              <Button onClick={this.submitTeam} size='sm' variant='primary'>
                Submit team
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handlePlayerAdded = cell => {
    const team = [...this.state.team, cell.data];
    const players = this.state.players.filter(
      player => player.id !== cell.data.id
    );
    this.setState({ team, players });
  };

  handlePlayerRemoved = cell => {
    const players = [...this.state.players, cell.data];
    const team = this.state.team.filter(player => player.id !== cell.data.id);
    this.setState({ team, players });
  };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  clearTeam = () => {
    const players = [...this.state.players, ...this.state.team];
    this.setState({ players, team: [] });
  };

  submitTeam = () => {
    console.log('Submitting team...');
  };
}
