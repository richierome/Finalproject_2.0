
//import React from 'react';
import "./TypingGame.css"
import React, { Component } from "react";
import $ from "jquery"


class TypingGame extends Component {
    state = {
        wordsArray : ["able",
        "acid",
        "aged",
        "also",
        "area",
        "army",
        "away",
        "baby",
        "back",
        "ball",
        "band",
        "bank",
        "base",
        "bath",
        "bear",
        "beat",
        "been",
        "beer",
        "bell",
        "belt",
        "best",
        "bill",
        "bird",
        "blow",
        "blue",
        "boat",
        "body",
        "bomb",
        "bond",
        "bone",
        "book",
        "boom",
        "born",
        "boss",
        "both",
        "bowl",
        "bulk",
        "burn",
        "bush",
        "busy",
        "call",
        "calm",
        "came",
        "camp",
        "card",
        "care",
        "case",
        "cash",
        "cast",
        "cell",
        "chat"],
        position : 0,
        intervalId: 0,
        positionArray: [],
        id: [],
        test: 0,
        lives: 5
    }
    handleClick = (event) => {
        event.preventDefault()
        this.refs.btn.setAttribute("disabled", "disabled")
        this.refs.input.setAttribute("type", "text")
        setInterval(this.fallDown, 500)
        $(this.state.wordsArray).each((index, value) => {
            var id = index
            this.setState({
                id : id
            })
            setTimeout(() =>{
                var box = $(".typingbox").width();
                $('<div />', {
                    "text": value,
                    "id" : index,
                    "class" : "fallingBox",
                })
                .css({
                    "left" : Math.floor((Math.random()*(box-80))),
                    "display": "inline",
                    "overflow" : "hidden",
                    "visibility": "hidden",
                    "top" : "0px"
                }).appendTo('.typingbox');
                //var test = document.getElementById(index)
                //console.log(test)
                //var word = document.getElementsByClassName("fallingBox")
                //console.log(word)
                var positionArray = this.state.positionArray.slice(0);
                positionArray.push(0)
                this.setState({
                    positionArray: positionArray
                })
            }, 3000 * index)
        }); 
        } 
    
    fallDown = () => {
        var lives = document.getElementById("lives")
        var word = document.getElementsByClassName("fallingBox")
        //var this.state.lives = parseInt(lives.innerText)
        var latitude;
        var divHeight = 480
        for (var i = 0; i < word.length; i++){
            latitude = this.state.positionArray[i]
            word[i].style.top = latitude + "px"; 
            word[i].style.display = "inline";
            word[i].style.visibility = "visible";


            //this drops word
            
    //    var test = 0
        // console.log(test)
            if (this.state.positionArray[this.state.test] > divHeight) { 
                let newLives = this.state.lives - 1;
                let newPositionArray = this.state.positionArray;
                let newWordArray = this.state.wordsArray
                newWordArray.shift()
                newPositionArray.shift()
                $("#lives").html(newLives)
                $("#"+ this.state.test).remove()
                var newTest = this.state.test + 1
                this.setState({
                    test: newTest,
                    lives: newLives
                })
            }else{
                var positionArray = this.state.positionArray.slice(0)
            positionArray[i] = latitude + 10;
            this.setState({
                positionArray: positionArray
            }, ()=>{})
            }
            
        } 
        // when word reaches the bottom
    }


    
    // deletes words if correctly typed
    deleteWord = (event) => {
        var score = document.getElementById("score")
        var yourScore = parseInt(score.innerText)
        if (event.key === "Enter"){
            if (this.state.wordsArray.includes($("input:text").val())) {
                yourScore++
                $("#score").html(yourScore)
                $(".fallingBox:contains("+ $("input:text").val() + ")").remove()
                $("input:text").val("")
            }
        }
    }

    

    render() {
        return (
            <div id="wrapper" >
                <div className="typingbox">
                    <div id="fallingBoxes">
                    {/* {this.state.wordsArray[0]} */}
                    </div>
                {/* words will populated here */}
                </div>
                <form id="wordInput">
                    <button ref="btn" onClick = {
                            this.handleClick
                            //this.fallDown
                        }
                        className="gameStart"
                    >START</button>
                    <input className="userInput" ref="input" type="hidden" autoComplete="off" onKeyPress={this.deleteWord} /><br/><br/>
                    <b>Score: </b><p id="score">0</p>
                    <b>Lives: </b><p id="lives">5</p>
                </form>
           </div>
          ); 
    }
}



export default TypingGame;



