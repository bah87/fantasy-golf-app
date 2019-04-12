import * as moment from 'moment';

const getPlayerURL = (id, firstName, lastName) => {
  return `/player/${id}/${firstName}-${lastName}`;
};

const getScore = score => {
  if (score > 0) {
    return `+${score}`;
  } else if (score === 0) {
    return 'E';
  } else {
    return score;
  }
};

const getToPar = (score, status) => {
  if (status === 'cut' || status === 'wd') {
    return status.toUpperCase();
  }

  return score;
};

const getThru = (thru, status, teeTime) => {
  if (status === 'cut' || status === 'wd') {
    return status.toUpperCase();
  } else if (!thru) {
    return teeTime;
  } else if (thru === 18) {
    return 'F';
  } else {
    return thru;
  }
};

const getTeeTime = (rounds, currentRound) => {
  const round = rounds && rounds[currentRound - 1];
  const teeTimeStr = round && round.tee_time;
  return teeTimeStr ? moment(teeTimeStr).format('h:mm a') : '';
};

export const getPlayer = playerParams => {
  const name = playerParams.PlayerName;
  const [lastName, firstName] = name.split(', ');
  const id = playerParams.TournamentPlayerId;

  return {
    id,
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    isMember: playerParams.isMember === 'Yes',
    isAlternate: playerParams.isAlternate === 'Yes',
    shortName: playerParams.ShortName,
    playerURL: getPlayerURL(id, firstName, lastName)
  };
};

export const getProjectedCut = leaderboard => {
  // let lead;
  // let cut;
  // players.forEach((player, pos) => {
  //   if (parseInt(player.current_position) === 1) {
  //     lead = player.total;
  //   }
  //   if (
  //     parseInt(player.current_position) <= 50 ||
  //     player.total - lead <= 10 ||
  //     pos + 1 <= 50
  //   ) {
  //     cut = player.total;
  //   }
  // });
  if (
    !leaderboard ||
    !leaderboard.cut_line ||
    !leaderboard.cut_line.cut_line_score
  ) {
    return undefined;
  }
  return getScore(leaderboard.cut_line.cut_line_score);
};

export const getPlayerStats = (stats, projCut) => {
  const rounds = stats.rounds;
  const score = getScore(stats.total);
  const currentRound = stats.current_round;
  const teeTime = getTeeTime(rounds, currentRound);
  const { first_name, last_name } = stats.player_bio;

  return {
    id: stats.player_id,
    rounds,
    currentRound,
    fullName: `${first_name} ${last_name}`,
    score,
    teeTime,
    total: stats.total,
    isCut: stats.status === 'cut',
    isWD: stats.status === 'wd',
    position: stats.current_position,
    totalStrokes: stats.total_strokes,
    today: getScore(stats.today),
    toPar: getToPar(score, stats.status),
    thru: getThru(stats.thru, stats.status, teeTime),
    roundOneScore: rounds && rounds[0].strokes,
    roundTwoScore: rounds && rounds[1].strokes,
    roundThreeScore: rounds && rounds[2].strokes,
    roundFourScore: rounds && rounds[3].strokes,
    projCut: stats.total > projCut
  };
};
