import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const COL_DEFS = [
  {
    headerName: 'TEAM',
    field: 'name',
    width: 100,
    cellStyle: { textAlign: 'start' }
  },
  { headerName: 'SCORE', field: 'score', width: 75 }
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
    return <AgGridReact columnDefs={COL_DEFS} rowData={this.getTeams()} />;
  }

  getTeams = () => {
    return this.state.teams.map(team => ({
      name: team.name,
      score: team.players
        .map(id => this.props.players[id].total)
        .reduce((acc, val) => acc + val)
    }));
  };
}
