import React from 'react';
import "./home.css"
import "./game.css"
import Alphabet from "../components/AlphabetGame/Alphabet"
import Space from './SpaceGame/Space';

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
            return <div><Alphabet /></div>     //<Alphabet />
        } else if (this.state.game === "game2"){
            return <div><Space /></div>
        } else if (this.state.game === "game3"){
            return <div>game3</div>
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
            
                <div className="box1 box" onClick={() => this.changeGame("game1")} ></div>
                <div className="box2 box" onClick={() => this.changeGame("game2")}></div>
                <div className="box3 box" onClick={() => this.changeGame("game3")}></div>
                {/* <div className="box4 box" onClick={() => this.changeGame("game4")}></div> */}
            </div>
          </div>
       
        );
    }
 }
  

      
    

export default Game;