import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayerSelect from './playerSelect';
import Tablero from './tablero'

const Main = () => {



  return (
    <>
      <h1 className="mainTitle">TIC TAC TOE in React.js</h1>
      <PlayerSelect />
    </>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
