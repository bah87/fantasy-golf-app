import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import MoonLoader from 'react-spinners/MoonLoader';
import Alert from 'react-bootstrap/Alert';

export class AddSalaries extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isDataLoaded: false,
      players: [],
      errorMsg: '',
    };
  }

  componentDidMount() {
    fetch('https://statdata.pgatour.com/r/026/field.json').then((res) =>
      res.json().then((data) => {
        const players = data.Tournament.Players.map((player) => {
          const { TournamentPlayerId: id, PlayerName } = player;
          const [last, first] = PlayerName.split(', ');
          return { fullName: `${first} ${last}`, id, salary: 0 };
        });
        this.setState({ players });
      })
    );
  }

  render() {
    const { isLoading, isDataLoaded, players, errorMsg } = this.state;

    return (
      <div>
        <div className="d-none">
          <CSVReader inputId="csv-reader" onFileLoaded={this.handleFileLoaded} onError={this.handleLoadError} />
        </div>
        <div className="d-flex justify-content-around align-items-center my-3">
          <label className="btn btn-secondary m-0" for="csv-reader">
            Upload
          </label>
          {isDataLoaded && (
            <button onClick={this.handleSubmit} className="btn btn-primary ml-5">
              Submit
            </button>
          )}
        </div>
        {errorMsg && (
          <Alert variant="danger" className="my-2">
            {errorMsg}
          </Alert>
        )}
        <MoonLoader sizeUnit={'px'} size={150} color={'#36D7B7'} loading={isLoading} />
        <ul className="list-unstyled text-left">
          {players.map((player, idx) => {
            return (
              <li key={player.id} className="d-flex border-bottom border-primary">
                <div className="col-md-9">{player.fullName}</div>
                <input className="col-md-3" type="text" value={players[idx].salary} onChange={this.handleChange(idx)} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  addSalary = (player) => {
    fetch('https://fantasy-golf-server.herokuapp.com/salaries', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerId: `${player.id}`, salary: player.salary }),
    }).then((res) => {
      console.log('...', res);
      return res.json().then(
        (resp) => console.log(resp),
        (err) => console.log('err: ', err)
      );
    });
  };

  handleSubmit = () => {
    if (this.state.players.some((player) => !player.salary)) {
      this.setState({ errorMsg: 'Please enter a salary for all players' });
      return;
    }

    this.state.players.forEach(this.addSalary);
    this.setState({ errorMsg: '' });
  };

  handleChange = (idx) => {
    return (e) => {
      const players = this.state.players.map((player, i) => {
        const salary = idx === i ? e.target.value : player.salary;
        return { ...player, salary };
      });
      this.setState({ players });
    };
  };

  handleFileLoaded = (fileData) => {
    this.setState({ isLoading: true });

    const salaries = {};
    fileData.forEach((row) => {
      // map player name to salary
      salaries[row[2]] = row[5];
    });
    console.log(salaries);

    const players = this.state.players.map((player) => {
      console.log(salaries[player.fullName]);
      return { ...player, salary: salaries[player.fullName] };
    });

    this.setState({ isLoading: false, isDataLoaded: true, players });
  };

  handleLoadError = (err) => console.log('Error loading file: ', err);
}
