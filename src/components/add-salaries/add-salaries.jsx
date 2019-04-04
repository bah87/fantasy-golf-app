import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import MoonLoader from 'react-spinners/MoonLoader';

export class AddSalaries extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      players: []
    };
  }

  render() {
    const { isLoading, players } = this.state;

    return (
      <div>
        <div className='d-none'>
          <CSVReader
            inputId='csv-reader'
            onFileLoaded={this.handleFileLoaded}
            onError={this.handleLoadError}
          />
        </div>
        <div className='d-flex'>
          <label className='btn btn-secondary' for='csv-reader'>
            Upload salary data
          </label>
          <button className='btn btn-primary'>Submit Salaries</button>
        </div>
        <MoonLoader
          sizeUnit={'px'}
          size={150}
          color={'#36D7B7'}
          loading={isLoading}
        />
        <ul className='list-unstyled text-left'>
          {players.map((player, idx) => {
            return (
              <li
                key={player.id}
                className='d-flex border-bottom border-primary'
              >
                <div className='col-md-12'>{player.fullName}</div>
                <input
                  className='col-md-4'
                  type='text'
                  value={players[idx].salary}
                  onChange={this.handleChange(idx)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleChange = idx => {
    return e => {
      const players = this.state.players.map((player, i) => {
        const salary = idx === i ? e.target.value : player.salary;
        return { ...player, salary };
      });
      this.setState({ players });
    };
  };

  handleFileLoaded = fileData => {
    this.setState({ isLoading: true });

    const salaries = {};
    fileData.forEach(row => {
      // map player name to salary
      salaries[row[2]] = row[5];
    });

    const players = this.props.players.map(player => {
      return { ...player, salary: salaries[player.fullName] };
    });

    this.setState({ isLoading: false, players });
  };

  handleLoadError = err => console.log('Error loading file: ', err);
}
