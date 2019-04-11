import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const COL_DEFS = [
  {
    headerName: 'TEAM',
    field: 'name',
    cellStyle: { textAlign: 'start' },
    width: 200
  },
  { headerName: 'SCORE', field: 'score' },
  { headerName: 'PLAYER 1', field: 'player1', width: 150 },
  { headerName: 'PLAYER 2', field: 'player2', width: 150 },
  { headerName: 'PLAYER 3', field: 'player3', width: 150 },
  { headerName: 'PLAYER 4', field: 'player4', width: 150 },
  { headerName: 'PLAYER 5', field: 'player5', width: 150 },
  { headerName: 'PLAYER 6', field: 'player6', width: 150 }
];

export class Standings extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: []
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
    return (
      <div
        className='ag-theme-balham'
        style={{
          height: '500px',
          width: '1200px'
        }}
      >
        <AgGridReact
          columnDefs={COL_DEFS}
          defaultColDef={{ width: 100 }}
          rowData={this.getTeams()}
        />
      </div>
    );
  }

  getTeams = () => {
    return this.props.players
      ? this.state.teams
          .map(team => ({
            name: team.name,
            score: team.players
              .map(id =>
                this.props.players[id] ? this.props.players[id].total : 0
              )
              .reduce((acc, val) => acc + val),
            player1: this.getName(0, team),
            player2: this.getName(1, team),
            player3: this.getName(2, team),
            player4: this.getName(3, team),
            player5: this.getName(4, team),
            player6: this.getName(5, team)
          }))
          .sort((a, b) => a.score - b.score)
      : [];
  };

  getName = (num, team) => {
    if (!this.props.players) {
      return '';
    }
    const id = team.players[num];
    const player = this.props.players[id];
    return player ? player.fullName : '';
  };
}
