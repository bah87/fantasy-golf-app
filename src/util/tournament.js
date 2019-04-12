import * as moment from 'moment';
import getCourse from './course';

const getTournament = tournamentParams => {
  return {
    id: tournamentParams.tournament_id,
    name: tournamentParams.tournament_name,
    tourName: tournamentParams.tour_name,
    startDate: moment(tournamentParams.start_date),
    endDate: moment(tournamentParams.end_date),
    lastUpdated: tournamentParams.lastUpdated,
    round: tournamentParams.current_round,
    roundState: tournamentParams.round_state,
    course: getCourse(tournamentParams.courses[0]),
    projCut: tournamentParams.projCut
  };
};

export default getTournament;
