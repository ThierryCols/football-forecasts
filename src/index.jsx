import React from 'react';
import ReactDOM from 'react-dom';
// import Bet from './components/Bet';
import Rankings from './components/Rankings';

// temporary for dev matters
const data = {
  users: [
    {
      id: 1,
      name: 'John',
    }, {
      id: 2,
      name: 'Paul',
    },
  ],
  pronos: [{
    id: 1,
    gameId: 1,
    userId: 1,
    teamId1: 2,
    teamId2: 1,
    winner: 1,
  }, {
    id: 2,
    gameId: 1,
    userId: 1,
    teamId1: 3,
    teamId2: 0,
    winner: 1,
  }, {
    id: 3,
    gameId: 1,
    userId: 2,
    teamId1: 2,
    teamId2: 3,
    winner: 2,
  }],
  games: [{
    id: 1,
    teamId1: 1,
    teamId2: 2,
    gameDate: '2016-06-15',
  }, {
    id: 2,
    teamId1: 2,
    teamId2: 1,
    gameDate: '2016-06-20',
  }],
  results: {
    1: {
      teamId1: 2,
      teamId2: 1,
      winner: 1,
    },
  },
  activeUser: 1,
  teams: {
    1: {
      teamName: 'France',
      crest: 'path/to/crest',
    },
    2: {
      teamName: 'Italy',
      crest: 'path/to/crest',
    },
  },
};


ReactDOM.render(
  // <Bet
  //   activeUser={data.activeUser}
  //   pronos={data.pronos.filter((pron) => pron.userId === data.activeUser)}
  //   games={data.games}
  //   teams={data.teams}
  // />,
  <Rankings
    users={data.users}
    pronos={data.pronos}
    results={data.results}
  />,
  document.getElementById('app')
);
