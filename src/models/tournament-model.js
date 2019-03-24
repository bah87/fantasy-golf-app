import * as moment from 'moment';
import { CourseModel } from './course-model';

export class TournamentModel {
  constructor(tournamentParams) {
    this.id = tournamentParams.tournament_id;
    this.name = tournamentParams.tournament_name;
    this.tourName = tournamentParams.tour_name;
    this.startDate = moment(tournamentParams.start_date);
    this.endDate = moment(tournamentParams.end_date);
    this.lastUpdated = tournamentParams.lastUpdated;
    this.round = tournamentParams.current_round;
    this.roundState = tournamentParams.round_state;
    this.course = new CourseModel(tournamentParams.courses[0]);
  }
}
