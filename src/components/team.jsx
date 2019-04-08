import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const plusIcon = () => <FontAwesomeIcon icon='plus-circle' />;
const minusIcon = () => <FontAwesomeIcon icon='minus-circle' />;

const getColDefs = type => {
  return [
    { headerName: 'PLAYER', field: 'id' },
    { headerName: 'SALARY', field: 'salary' },
    {
      width: 50,
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

  componentDidMount() {
    fetch('https://fantasy-golf-server.herokuapp.com/salaries').then(res =>
      res.json().then(players =>
        this.setState({
          players: players.map(player => ({
            id: player.player_id,
            salary: player.salary
          }))
        })
      )
    );
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
        <div className='d-flex flex-row align-items-start justify-content-space-between'>
          <div
            className='ag-theme-balham'
            style={{
              height: '400px',
              width: '250px'
            }}
          >
            <AgGridReact
              columnDefs={getColDefs('players')}
              defaultColDef={{ width: 100 }}
              rowData={players.sort((a, b) => b.salary - a.salary)}
              onCellClicked={this.handlePlayerAdded}
            />
          </div>
          <div
            className='ag-theme-balham'
            style={{
              height: '400px',
              width: '250px'
            }}
          >
            <AgGridReact
              columnDefs={getColDefs('team')}
              defaultColDef={{ width: 100 }}
              rowData={team}
              onCellClicked={this.handlePlayerRemoved}
            />
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

  handleSubmit = () => {
    //
  };
}
