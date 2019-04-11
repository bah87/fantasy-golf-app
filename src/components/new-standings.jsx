import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { DetailedStandings } from './detailed-standings';
import { CompactStandings } from './compact-standings';

export class NewStandings extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      isDetailed: true
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
    const { isDetailed } = this.state;
    return (
      <div className='d-flex flex-column justify-content-start align-items-center'>
        <ButtonGroup className='my-3'>
          <Button
            onClick={this.setIsDetailed(true)}
            variant={isDetailed ? 'primary' : 'secondary'}
          >
            Detailed
          </Button>
          <Button
            onClick={this.setIsDetailed(false)}
            variant={isDetailed ? 'secondary' : 'primary'}
          >
            Compact
          </Button>
        </ButtonGroup>
        {isDetailed ? (
          <DetailedStandings
            players={this.props.players}
            teams={this.state.teams}
          />
        ) : (
          <CompactStandings
            players={this.props.players}
            teams={this.state.teams}
          />
        )}
      </div>
    );
  }

  setIsDetailed = isDetailed => {
    return () => {
      this.setState({ isDetailed });
    };
  };
}
