import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import groupBy from 'lodash/groupBy';

const COL_DEFS = [
  { headerName: 'POS', field: 'position', width: 70 },
  {
    headerName: 'PLAYER',
    field: 'fullName',
    width: 150,
    cellStyle: { textAlign: 'start' }
  },
  { headerName: 'THRU', field: 'thru' },
  { headerName: 'SCORE', field: 'total' }
];

export class DetailedStandings extends React.Component {
  render() {
    return this.getTeams().map(team => {
      return (
        <div className='d-flex flex-column align-items-center justify-content-start mt-3'>
          <div className='d-flex flex-row align-items-center justify-content-between'>
            <div className='h3 text-primary mr-3'>{team.pos}</div>
            <div className='d-flex flex-column align-items-center justify-content-start'>
              <div className='h3'>
                {`${team.name} `}
                <strong className='text-primary'>{team.score}</strong>
              </div>
              <div
                className='ag-theme-balham'
                style={{
                  height: '200px',
                  width: '420px'
                }}
              >
                <AgGridReact
                  columnDefs={COL_DEFS}
                  defaultColDef={{ width: 100 }}
                  rowData={team.players}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  getTeams = () => {
    const teams = this.props.players
      ? this.props.teams.map(team => ({
          name: team.name,
          score: team.players
            .map(id =>
              this.props.players[id] ? this.props.players[id].total : 0
            )
            .reduce((acc, val) => acc + val),
          players: team.players.map(id => this.props.players[id])
        }))
      : [];

    return this.generateStandings(teams);
  };

  generateStandings = teams => {
    const grouped = groupBy(teams, 'score');
    const positionedTeams = [];
    let pos = 1;
    Object.keys(grouped)
      .sort((a, b) => a - b)
      .forEach(key => {
        const actualPos = grouped[key].length > 1 ? `T${pos}` : ` ${pos}`;

        const labeledTeams = grouped[key].map(team => ({
          ...team,
          pos: actualPos
        }));
        pos += grouped[key].length;
        positionedTeams.push(...labeledTeams);
      });

    return positionedTeams;
  };
}
