import React from 'react';
import ReactDOM from 'react-dom';
import Bet from './components/Bet';

//temporary for dev matters
const data = {
  users: {
    1: 'John',
    2: 'Paul'
  },
  pronos: [{
    id: 1,
    gameId: 1,
    userId: 1,
    teamId1: 2,
    teamId2: 1
  }],
  games: [{
    id: 1,
    teamId1: 1,
    teamId2: 2,
    gameDate: '2016-06-15'
  },{
    id: 2,
    teamId1: 2,
    teamId2: 1,
    gameDate: '2016-06-20'
  }],
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
  }
}


ReactDOM.render(
  <Bet activeUser={data.activeUser}
    pronos={data.pronos.filter(function (pron) {return pron.userId === data.activeUser})}
    games={data.games}
    teams={data.teams}
    />,
  document.getElementById('app')
);