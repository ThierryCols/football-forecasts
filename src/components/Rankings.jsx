import React, { PropTypes } from 'react';

class Rankings extends React.Component {
  getUsers() {
    return this.props.users;
  }

  getUserScore(user) {
    const userPronos = this.props.pronos.filter((prono) => prono.userId === user.id);

    const finalScore = userPronos.reduce((score, prono) => {
      if (this.props.results[prono.gameId] &&
      this.props.results[prono.gameId].teamId1 === prono.teamId1 &&
      this.props.results[prono.gameId].teamId2 === prono.teamId2) {
        return score + 3;
      } else if (this.props.results[prono.gameId] &&
      this.props.results[prono.gameId].winner === prono.winner) {
        return score + 1;
      }
      return score;
    }, 0);
    return finalScore;
  }

  displayUserScore(user) {
    return (<ul key={user.id}>
      {user.name} --- score: {::this.getUserScore(user)}
    </ul>);
  }
  render() {
    return (<div className="rankings">
      {this.getUsers().map(::this.displayUserScore)}
    </div>);
  }
}

Rankings.propTypes = {
  users: PropTypes.array,
  pronos: PropTypes.array,
  results: PropTypes.object,
};

export default Rankings;
