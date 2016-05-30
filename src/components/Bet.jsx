import React from 'react';

export default React.createClass({
  getGames: function() {
    return this.props.games || [];
  },
  getTeamName: function(teamId) {
    return this.props.teams[teamId].teamName;
  },
  displayGame: function(game) {
    return <div className={'game'.concat(game.id)}>
      <h4>Game {game.id}</h4>
      <p>{this.getTeamName(game.teamId1)} - {this.getTeamName(game.teamId2)}</p>
      <div className="pronos">
        <input type="number"
          placeholder={'Score for '.concat(this.getTeamName(game.teamId1))}
          name={'game'.concat(game.id).concat('ScoreTeam1')} />
         -
        <input type="number"
          placeholder={'Score for '.concat(this.getTeamName(game.teamId2))}
          name={'game'.concat(game.id).concat('ScoreTeam2')} />
      </div>
    </div>
  },
  render: function() {
    return <div className="bet">
      {this.getGames().map(game =>
        this.displayGame(game)
      )}
    </div>;
  }
});
