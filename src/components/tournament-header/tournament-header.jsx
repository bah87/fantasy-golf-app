import React from 'react';
import PropTypes from 'prop-types';
import './tournament-header.css';

export class TournamentHeader extends React.Component {
  componentDidMount() {
    // make requests for course and weather
  }

  render() {
    const {
      name,
      tourName,
      startDate,
      endDate,
      course,
      round,
      roundState
    } = this.props.tournament;

    return (
      <div className='tournament-header'>
        <div className='tournament-header-name'>{name}</div>
        <div className={'tournament-header-medium'}>{tourName}</div>
        <div
          className={'tournament-header-medium tournament-header-date'}
        >{`${startDate.format('MMMM Do')} - ${endDate.format('Do YYYY')}`}</div>
        <div className={'tournament-header-small'}>{course.name}</div>
        <div className={'tournament-header-small'}>{`Par ${
          course.parTotal
        }`}</div>
        <div
          className={'tournament-header-medium'}
        >{`Round ${round} - ${roundState}`}</div>
      </div>
    );
  }
}

TournamentHeader.propTypes = {
  tournament: PropTypes.object.isRequired
};
