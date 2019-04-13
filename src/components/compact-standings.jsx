import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { generateStandings } from '../util/utils';

const COL_DEFS = [
  { headerName: 'POS', field: 'position', width: 70 },
  {
    headerName: 'TEAM',
    field: 'name',
    cellStyle: { textAlign: 'start' },
    width: 200
  },
  { headerName: 'SCORE', field: 'score' }
];

export class CompactStandings extends React.Component {
  render() {
    return (
      <div
        className='ag-theme-balham'
        style={{
          height: '500px',
          width: '370px'
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
    const teams = this.props.players
      ? this.props.teams
          .map(team => ({
            name: team.name,
            score: team.players
              .map(id =>
                this.props.players[id] ? this.props.players[id].total : 0
              )
              .reduce((acc, val) => acc + val)
          }))
          .sort((a, b) => a.score - b.score)
      : [];

    return generateStandings(teams);
  };
}
