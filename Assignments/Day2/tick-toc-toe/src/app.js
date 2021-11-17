import React from 'react';
import'./app.css';
import SiteHeader from './components/ttt-header';
import Game from './components/ttt-game';

export default class App extends React.Component{

    render(){
        return(
            <div>
                {/* <SiteHeader title="Tic Tac Toe" color="purple" size={20}/> */}
                <div className="container">
                    <SiteHeader  title="Tic Tac Toe"/>
                    <Game left={130} top={190}/>
                </div>
            </div>
        );
    }
}



