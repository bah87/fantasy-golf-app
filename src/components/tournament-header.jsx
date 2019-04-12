import React from 'react';
import PropTypes from 'prop-types';

export class TournamentHeader extends React.Component {
  render() {
    const {
      name,
      startDate,
      endDate,
      course,
      round,
      roundState,
      projCut
    } = this.props.tournament;

    return (
      <div className='d-flex flex-column align-items-start justify-content-start w-100'>
        <div className='display-4'>{name}</div>
        <div className='h5 text-muted'>{`${startDate.format(
          'MMMM Do'
        )} - ${endDate.format('Do YYYY')}`}</div>
        <div className='h6 text-muted mb-0'>
          <small>{`${course.name} | Par ${course.parTotal}`}</small>
        </div>
        <div className='d-flex flex-row w-100 justify-content-between align-items-center'>
          <div className='h6 text-muted'>
            <small>{`Round ${round} - ${roundState}`}</small>
          </div>
          <div className='h4'>{`Projected Cut: ${projCut}`}</div>
        </div>
      </div>
    );
  }
}

TournamentHeader.propTypes = {
  tournament: PropTypes.object.isRequired
};
