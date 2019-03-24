import * as moment from 'moment';

export class PlayerModel {
  constructor(playerParams) {
    this.id = playerParams.TournamentPlayerId;
    this.fullName = playerParams.PlayerName;
    this.isMember = playerParams.isMember === 'Yes';
    this.isAlternate = playerParams.isAlternate === 'Yes';
    this.shortName = playerParams.ShortName;
    this.updateName();
  }

  get url() {
    return `/player/${this.id}/${this.firstName}-${this.lastName}`;
  }

  get isCut() {
    return this.status === 'cut';
  }

  get isWD() {
    return this.status === 'wd';
  }

  get score() {
    if (this.rawScore > 0) {
      return `+${this.rawScore}`;
    } else if (this.rawScore === 0) {
      return 'E';
    } else {
      return this.rawScore;
    }
  }

  get today() {
    return this.score;
  }

  get toPar() {
    if (this.isCut) {
      return 'CUT';
    } else if (this.isWD) {
      return 'WD';
    }

    return this.score;
  }

  get teeTime() {
    const round = this.rounds[this.currentRound - 1];
    const teeTimeStr = round && round.tee_time;
    return teeTimeStr ? moment(teeTimeStr).format('h:mm a') : '';
  }

  get thru() {
    if (this.isCut) {
      return 'CUT';
    } else if (this.isWD) {
      return 'WD';
    } else if (!this.rawThru) {
      return this.teeTime;
    } else if (this.rawThru === 18) {
      return 'F';
    } else {
      return this.rawThru;
    }
  }

  get roundOneScore() {
    return this.rounds[0].strokes;
  }

  get roundTwoScore() {
    return this.rounds[1].strokes;
  }

  get roundThreeScore() {
    return this.rounds[2].strokes;
  }

  get roundFourScore() {
    return this.rounds[3].strokes;
  }

  updateName = () => {
    const [lastName, firstName] = this.fullName.split(', ');
    this.lastName = lastName;
    this.firstName = firstName;
  };

  updatePlayerStats = stats => {
    this.status = stats.status;
    this.rawScore = stats.score;
    this.rounds = stats.rounds;
    this.currentRound = stats.current_round;
    this.rawThru = stats.thru;
    this.position = stats.current_position;
    this.total = stats.total;
    this.totalStrokes = stats.total_strokes;
  };
}
