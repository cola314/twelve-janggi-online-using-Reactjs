import React, { useEffect, useState } from 'react';
import Login from '../pages/Login';
import WaitingRoom from '../pages/WaitingRoom';
import MakeRoom from '../pages/MakeRoom';
import InGame from '../pages/InGame';
import EndGame from '../pages/EndGame';
import WaitingGame from '../pages/WaitingGame';
import socketService from './socket';

function App() {
  const [info, setInfo] = useState({
    // page : 'login',
    // userName : '',
    // roomList : [],
    // game : null,
    // msg : ''
    page : 'login',
    userName : 'Bill',
    roomList : {},
    game : {color:'red', turn:'red', myTime:30, opTime:30, opName:'김정호', board: {}},
    msg : ''
  });
  useEffect(() => {
    socketService.init(setInfo);
  });
  const curPage = (page) => {
    switch(page) {
      case 'login' :        return <Login info={info} />;
      case 'waitingRoom' :  return <WaitingRoom info={info} />;
      case 'makeRoom' :     return <MakeRoom info={info} />;
      case 'inGame' :       return <InGame info={info} />;
      case 'endGame' :      return <EndGame info={info} />;
      case 'waitingGame' :      return <WaitingGame info={info} />;

      default : return <>{'w'+page+'w'}</>;
    }
  };
  return (
    <>{ curPage(info.page) }</>
  );
}

export default App;