import React, { PropTypes } from 'react';

class Bet extends React.Component {
  getGames() {
    return this.props.games || [];
  }
  getTeamName(teamId) {
    return this.props.teams[teamId].teamName;
  }
  displayGame(game) {
    return (<div className={`game${game.id}`} key={game.id}>
      <h4>Game {game.id}</h4>
      <p>{this.getTeamName(game.teamId1)} - {this.getTeamName(game.teamId2)}</p>
      <div className="pronos">
        <input
          type="number"
          placeholder={`Score for ${this.getTeamName(game.teamId1)}`}
          name={`game${game.id}ScoreTeam1`}
        />
         -
        <input
          type="number"
          placeholder={`Score for ${this.getTeamName(game.teamId2)}`}
          name={`game${game.id}ScoreTeam2`}
        />
      </div>
    </div>);
  }
  render() {
    return (<div className="bet">
      {this.getGames().map(::this.displayGame)}
    </div>);
  }
}

Bet.propTypes = {
  games: PropTypes.array,
  teams: PropTypes.object,
};

export default Bet;
