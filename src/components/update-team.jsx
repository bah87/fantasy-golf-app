import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPlayer } from '../util/player';

export class UpdateTeam extends React.Component {
  constructor() {
    super();
    this.state = {
      remainingSalary: 50000,
      players: [],
      playerMap: {},
      team: [],
      playerSearch: '',
      error: '',
      isSubmitted: false,
      isSubmitDisabled: false,
      selectedTeam: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.user || !props.user.team || !state.playerMap || state.selectedTeam) {
      return;
    }

    const selectedTeam = props.user.team.players;
    const team = selectedTeam.map((id) => state.playerMap[id]);
    const teamSalary = selectedTeam
      .map((id) => (state.playerMap[id] ? state.playerMap[id].salary : 0))
      .reduce((acc, val) => acc + val);
    return {
      selectedTeam,
      team,
      remainingSalary: 50000 - teamSalary,
      players: state.players.filter((player) => !(state.selectedTeam || []).includes(player.player_id)),
    };
  }

  async componentDidMount() {
    // get player data
    const fieldResp = await fetch('https://statdata.pgatour.com/r/026/field.json');
    const fieldData = await fieldResp.json();
    const playerMap = {};
    fieldData.Tournament.Players.forEach((playerParams) => {
      const player = getPlayer(playerParams);
      playerMap[player.id] = player;
    });

    // get player salaries
    const salaryResp = await fetch('https://fantasy-golf-server.herokuapp.com/salaries');
    const salaryData = await salaryResp.json();
    salaryData.forEach((player) => {
      if (playerMap[player.player_id]) {
        playerMap[player.player_id].salary = parseInt(player.salary);
      }
    });

    // update state
    this.setState({
      players: Object.values(playerMap).filter((player) => !(this.state.selectedTeam || []).includes(player.player_id)),
      playerMap,
    });
  }

  render() {
    const { team, remainingSalary, playerSearch, error, isSubmitted, isSubmitDisabled } = this.state;

    return (
      <div className="d-flex flex-column align-items-center justify-content-start mt-2">
        <div className="d-flex flex-row align-items-start justify-content-around w-100 mt-5">
          <div d-flex flex-column align-items-center justify-content-start>
            <InputGroup className="mb-3">
              <FormControl value={playerSearch} onChange={this.handlePlayerSearch} placeholder="Player search" />
              <InputGroup.Append>
                <Button onClick={this.clearPlayerSearch} variant="outline-secondary">
                  Clear
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <div
              className="ag-theme-balham"
              style={{
                height: '400px',
                width: '280px',
              }}
            >
              <AgGridReact
                columnDefs={this.getColDefs('players')}
                rowData={this.displayPlayers()}
                onCellClicked={this.handlePlayerAdded}
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-start ml-3">
            <div
              className="ag-theme-balham"
              style={{
                height: '200px',
                width: '280px',
              }}
            >
              <AgGridReact
                columnDefs={this.getColDefs('team')}
                rowData={team}
                onCellClicked={this.handlePlayerRemoved}
              />
            </div>
            <div className="w-100 mt-2 h5">
              <span className="mr-1">Remaining salary:</span>
              <span className={remainingSalary < 0 ? 'text-danger' : 'text-success'}>
                {this.formatSalary(remainingSalary)}
              </span>
            </div>
            {error && (
              <Alert className="small mb-1" variant="danger">
                {error}
              </Alert>
            )}
            {isSubmitted && (
              <Alert className="small mb-1" variant="success">
                Team submitted successfully
              </Alert>
            )}
            <div className="d-flex flex-row align-items-center justify-content-around w-100 mt-2">
              <Button onClick={this.clearTeam} size="sm" variant="secondary">
                Clear team
              </Button>
              <Button disabled={isSubmitDisabled} onClick={this.submitTeam} size="sm" variant="primary">
                Update team
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  setIsSubmitted = (isSubmitted) => {
    this.setState({ isSubmitted });
    setTimeout(() => this.setState({ isSubmitted: !isSubmitted }), 2500);
  };

  setError = (error) => {
    this.setState({ error });
    setTimeout(() => this.setState({ error: '' }), 2500);
  };

  clearPlayerSearch = () => {
    this.setState({ playerSearch: '' });
  };

  displayPlayers = () => {
    const { players, playerSearch } = this.state;
    const regex = new RegExp(playerSearch.toLowerCase());
    return players.filter((p) => regex.test(p.fullName.toLowerCase())).sort((a, b) => b.salary - a.salary);
  };

  formatSalary = (salary) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(salary);

    return formatted.split('.')[0];
  };

  showAddIcon = (salary) => {
    return salary <= this.state.remainingSalary && this.state.team.length < 6;
  };

  plusIcon = (props) => {
    return (
      <FontAwesomeIcon
        style={{ cursor: 'pointer' }}
        className={props.data.salary > this.state.remainingSalary ? 'text-danger' : 'text-success'}
        icon="plus-circle"
      />
    );
  };

  minusIcon = () => <FontAwesomeIcon style={{ cursor: 'pointer' }} className="text-danger" icon="minus-circle" />;

  getColDefs = (type) => {
    return [
      {
        headerName: 'PLAYER',
        field: 'fullName',
        width: 150,
        cellStyle: { textAlign: 'start' },
      },
      { headerName: 'SALARY', field: 'salary', width: 90 },
      {
        width: 40,
        cellRendererFramework: type === 'players' ? this.plusIcon : this.minusIcon,
      },
    ];
  };

  handlePlayerAdded = (cell) => {
    if (cell.value || this.state.team.length === 6) {
      return;
    }

    const team = [...this.state.team, cell.data];
    const players = this.state.players.filter((player) => player.id !== cell.data.id);
    const remainingSalary = this.state.remainingSalary - cell.data.salary;
    this.setState({ team, players, remainingSalary });
  };

  handlePlayerRemoved = (cell) => {
    if (cell.value) {
      return;
    }

    const players = [...this.state.players, cell.data];
    const team = this.state.team.filter((player) => player.id !== cell.data.id);
    const remainingSalary = this.state.remainingSalary + cell.data.salary;
    this.setState({ team, players, remainingSalary });
  };

  handlePlayerSearch = (e) => {
    this.setState({ playerSearch: e.target.value });
  };

  clearTeam = () => {
    const players = [...this.state.players, ...this.state.team];
    this.setState({ players, team: [], remainingSalary: 50000 });
  };

  submitTeam = () => {
    const { selectedTeam, team, remainingSalary } = this.state;
    if (!selectedTeam) {
      this.setError('Please select a team');
    } else if (team.length !== 6) {
      this.setError('Please select 6 players');
      return;
    } else if (remainingSalary < 0) {
      this.setError('Salary exceeds $50K');
      return;
    }

    this.setState({ isSubmitDisabled: true });

    fetch('https://fantasy-golf-server.herokuapp.com/teams', {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: selectedTeam.email,
        team: team.map((player) => player.id),
      }),
    })
      .then((res) => {
        console.log('updateTeam response: ', res);
        return res
          .json()
          .then((resp) => {
            console.log('updateTeam json: ', resp);
            if (resp && resp.status === 'success') {
              this.setIsSubmitted(true);
              this.setState({ error: '' });
            }
            this.setState({ isSubmitDisabled: false });
          })
          .catch((err) => {
            console.log('updateTeam json failed: ', err);
            this.handleError();
          });
      })
      .catch((err) => {
        console.log('updateTeam failed: ', err);
        this.handleError();
      });
  };

  handleError = () => {
    this.setError('There was an error updating your team.');
    this.setState({ isSubmitDisabled: false });
  };
}
