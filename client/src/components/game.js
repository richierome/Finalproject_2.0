import React from 'react';
import "./home.css"
import "./game.css"
import Alphabet from "./AlphabetGame/Alphabet"
import Space from './SpaceGame/Space';
import TypingGame from "./TypingGame/TypingGame";

class Game extends React.Component {
    state = {
        game:"game1"   
    }

    changeGame = (game) => {
        this.setState({
            game:game
        })
    }

    loadGame = () => {
        if (this.state.game === "game1"){
            return <div><Space /></div>     //<Alphabet />
        } else if (this.state.game === "game2"){
            return <div><Alphabet /></div>
        } else if (this.state.game === "game3"){
            return <div><TypingGame /></div>
        // } else {
        //     return <div>game4</div>
        }
    }

    render() {
        return (
         <div className="Home">
             
              
            <div className="main-container">
                <div className="gamebox">
                    {this.loadGame()}
                </div>
            
                <div className="box1 box" onClick={() => this.changeGame("game1")}>
                    <div className="main-box-text">Space Quest</div>
                    </div>
                <div className="box2 box" onClick={() => this.changeGame("game2")}>
                    <div className="main-box-text">Alphabet</div>
                    </div>
                <div className="box3 box" onClick={() => this.changeGame("game3")}>
                    <div className="main-box-text">Typing Game</div>
                    </div>
                {/* <div className="box4 box" onClick={() => this.changeGame("game4")}></div> */}
            </div>
          </div>
       
        );
    }
 }
  

      
    

export default Game;