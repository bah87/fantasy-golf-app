import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { TournamentHeader } from '../tournament-header';

const COLUMN_DEFS = [
  { headerName: 'POS', field: 'position', width: 70 },
  {
    headerName: 'PLAYER',
    field: 'fullName',
    width: 150,
    cellStyle: { textAlign: 'start' }
  },
  { headerName: 'TO PAR', field: 'toPar' },
  { headerName: 'TODAY', field: 'today' },
  { headerName: 'THRU', field: 'thru' },
  { headerName: 'R1', field: 'roundOneScore' },
  { headerName: 'R2', field: 'roundTwoScore' },
  { headerName: 'R3', field: 'roundThreeScore' },
  { headerName: 'R4', field: 'roundFourScore' },
  { headerName: 'TOT', field: 'totalStrokes' }
];

export class Leaderboard extends React.Component {
  componentDidMount() {
    this.props.fetchLeaderboard();
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        {this.renderTournamentHeader()}
        <div
          className='ag-theme-balham'
          style={{
            height: '500px',
            width: '1000px'
          }}
        >
          <AgGridReact
            columnDefs={COLUMN_DEFS}
            defaultColDef={{ width: 100 }}
            gridOptions={{ enableCellChangeFlash: true }}
            rowData={this.props.players}
          />
        </div>
      </div>
    );
  }

  renderTournamentHeader = () => {
    return (
      this.props.tournament && (
        <TournamentHeader tournament={this.props.tournament} />
      )
    );
  };
}
