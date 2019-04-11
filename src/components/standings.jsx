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
  { headerName: 'SCORE', field: 'score' }
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
          width: '300px'
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
              .map(id => this.props.players[id].total)
              .reduce((acc, val) => acc + val)
          }))
          .sort((a, b) => a.score - b.score)
      : [];
  };
}
