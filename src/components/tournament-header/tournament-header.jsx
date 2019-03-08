import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import './tournament-header.css';

export class TournamentHeader extends React.Component {
  componentDidMount() {
    // make requests for course and weather
  }

  render() {
    return (
      <div className='tournament-header'>
        <div className='tournament-header-name'>
          {this.props.tournamentName}
        </div>
        <div className={'tournament-header-medium'}>{this.props.tourName}</div>
        <div
          className={'tournament-header-medium tournament-header-date'}
        >{`${moment(this.props.startDate).format('MMMM Do')} - ${moment(
          this.props.endDate
        ).format('Do YYYY')}`}</div>
        <div className={'tournament-header-small'}>{this.props.courseName}</div>
        <div className={'tournament-header-small'}>{`Par ${
          this.props.parTotal
        }`}</div>
        <div className={'tournament-header-medium'}>{`Round ${
          this.props.round
        } - ${this.props.roundState}`}</div>
      </div>
    );
  }
}

TournamentHeader.propTypes = {
  tournamentId: PropTypes.string.isRequired,
  tournamentName: PropTypes.string.isRequired,
  tourName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  parTotal: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  round: PropTypes.string.isRequired,
  roundState: PropTypes.string.isRequired
};
