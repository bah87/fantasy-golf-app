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

  updateName = () => {
    const [lastName, firstName] = this.fullName.split(', ');
    this.lastName = lastName;
    this.firstName = firstName;
  };
}
