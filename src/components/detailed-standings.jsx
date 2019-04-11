import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import groupBy from 'lodash/groupBy';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { PlayerCellRenderer } from './player-cell-renderer';

const COL_DEFS = [
  { headerName: 'POS', field: 'position', width: 70 },
  {
    headerName: 'PLAYER',
    field: 'fullName',
    width: 150,
    cellStyle: { textAlign: 'start' },
    cellRendererFramework: PlayerCellRenderer
  },
  { headerName: 'THRU', field: 'thru' },
  { headerName: 'SCORE', field: 'total' }
];

export class DetailedStandings extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  render() {
    const teams = this.getTeams();
    return this.state.isLoading ? (
      <PacmanLoader sizeUnit={'px'} size={25} color={'#36D7B7'} loading />
    ) : (
      teams.map(team => {
        return (
          <div className='d-flex flex-column align-items-center justify-content-start mt-3'>
            <div className='d-flex flex-column align-items-end justify-content-start'>
              <div className='d-flex'>
                <div className='h3 text-primary mr-3'>{team.pos}</div>
                <div className='h3'>{`${team.name}: ${team.score}`}</div>
              </div>
              <div
                className='ag-theme-balham'
                style={{
                  height: '188px',
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
        );
      })
    );
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

    if (this.state.isLoading) {
      this.setState({ isLoading: false });
    }

    return this.generateStandings(teams);
  };

  generateStandings = teams => {
    const grouped = groupBy(teams, 'score');
    const positionedTeams = [];
    let pos = 1;
    Object.keys(grouped)
      .sort((a, b) => a - b)
      .forEach(key => {
        let actualPos = `${pos}`;
        if (grouped[key].length > 1) {
          actualPos = `T${actualPos}`;
        }

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
