import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

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
      <ul>
        {this.state.teams.map(team => {
          return <li key={team.id}>{team.name}</li>;
        })}
      </ul>
    );
  }
}
