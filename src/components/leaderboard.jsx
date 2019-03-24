import React from 'react';
import * as moment from 'moment';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { TournamentModel } from '../models/tournament-model';
import { TournamentHeader } from './tournament-header/tournament-header';
import { PlayerCellRenderer } from './player-cell-renderer';

export class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      columnDefs: [
        { headerName: 'POS', field: 'position', width: 70 },
        {
          headerName: 'PLAYER',
          field: 'name',
          width: 150,
          cellStyle: { textAlign: 'start' },
          cellRendererFramework: PlayerCellRenderer
        },
        { headerName: 'TO PAR', field: 'toPar' },
        { headerName: 'TODAY', field: 'today' },
        { headerName: 'THRU', field: 'thru' },
        { headerName: 'R1', field: 'roundOneScore' },
        { headerName: 'R2', field: 'roundTwoScore' },
        { headerName: 'R3', field: 'roundThreeScore' },
        { headerName: 'R4', field: 'roundFourScore' },
        { headerName: 'TOT', field: 'totalStrokes' }
      ],
      playerData: [],
      tournament: undefined
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchData();
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
            columnDefs={this.state.columnDefs}
            defaultColDef={{ width: 100 }}
            gridOptions={{ enableCellChangeFlash: true }}
            rowData={this.state.playerData}
          />
        </div>
      </div>
    );
  }

  renderTournamentHeader = () => {
    return (
      this.state.tournament && (
        <TournamentHeader tournament={this.state.tournament} />
      )
    );
  };

  fetchData = () => {
    fetch('https://statdata.pgatour.com/r/current/message.json').then(
      res => res.json().then(this.handleFetchTournamentId),
      this.handleFetchError
    );
  };

  handleFetchTournamentId = res => {
    if (!res || !res.tid) {
      const error = `Error fetching tournament id ${res}`;
      this.setState({ error });
      console.log(error);
      return;
    }

    fetch(
      `https://statdata.pgatour.com/r/${res.tid}/leaderboard-v2mini.json`
    ).then(
      data => data.json().then(this.handleFetchTournamentData),
      this.handleFetchError
    );
  };

  mapScore = (score, status) => {
    if (status === 'cut' || status === 'wd') {
      return status.toUpperCase();
    } else if (score > 0) {
      return `+${score}`;
    } else if (score === 0) {
      return 'E';
    } else {
      return score;
    }
  };

  mapThru = player => {
    const { status, thru, rounds, current_round } = player;

    if (status === 'cut' || status === 'wd') {
      return status.toUpperCase();
    } else if (!thru) {
      const round = rounds[current_round - 1];
      const teeTimeStr = round && round.tee_time;
      return teeTimeStr ? moment(teeTimeStr).format('h:mm a') : '';
    } else if (thru === 18) {
      return 'F';
    } else {
      return thru;
    }
  };

  handleFetchTournamentData = data => {
    if (!data || !data.leaderboard || !data.leaderboard.players) {
      console.log('No tournament or player data: ', data);
      return;
    }

    const tournament = new TournamentModel({
      ...data.leaderboard,
      lastUpdated: data.last_updated
    });

    const playerData = data.leaderboard.players.map(player => {
      const { first_name, last_name, country } = player.player_bio;

      return {
        id: player.player_id,
        position: player.current_position,
        country,
        name: `${first_name} ${last_name}`,
        toPar: this.mapScore(player.total, player.status),
        today: this.mapScore(player.today),
        thru: this.mapThru(player),
        roundOneScore: player.rounds[0].strokes,
        roundTwoScore: player.rounds[1].strokes,
        roundThreeScore: player.rounds[2].strokes,
        roundFourScore: player.rounds[3].strokes,
        totalStrokes: player.total_strokes,
        status: player.status
      };
    });

    this.setState({
      isLoading: false,
      error: undefined,
      playerData,
      tournament
    });
  };

  handleFetchError = err => {
    this.setState({ error: err });
    console.log('Fetch error: ', err);
  };
}
