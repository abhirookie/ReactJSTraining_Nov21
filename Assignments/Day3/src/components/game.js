import React from 'react';
import Board from './board';
import StatusMessage from './status';

const Game = (props)=>{


    return (
        <div className="game">
            <StatusMessage/>
            <Board/>
            <button className='reset-button'>Reset</button>
        </div>
        );
};


export default Game;