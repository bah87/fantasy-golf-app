import groupBy from 'lodash/groupBy';

export const generateStandings = teams => {
  const grouped = groupBy(teams, 'score');
  const positionedTeams = [];
  let pos = 1;
  Object.keys(grouped)
    .sort((a, b) => a - b)
    .forEach(key => {
      const actualPos = grouped[key].length > 1 ? `T${pos}` : ` ${pos}`;

      const labeledTeams = grouped[key].map(team => ({
        ...team,
        pos: actualPos
      }));
      pos += grouped[key].length;
      positionedTeams.push(...labeledTeams);
    });

  return positionedTeams;
};
