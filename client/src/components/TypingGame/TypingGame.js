//import React from 'react';
import "./TypingGame.css"
import React, { Component } from "react";
import $ from "jquery"


class TypingGame extends Component {
    // state = {
    //     wordsArray : ["hello", "world", "hi", "test"],
    //     position : 0,
    //     intervalId: 0,
    //     positionArray: []
    // }
    // handleClick = (event) => {
    //     event.preventDefault()
    //     this.refs.btn.setAttribute("disabled", "disabled")
    //     this.refs.input.setAttribute("type", "text")
    //     setInterval(this.fallDown, 300)
    //     $(this.state.wordsArray).each((index, value) => {
    //         setTimeout(() =>{
    //             var box = $(".box").width();
    //             $('<div />', {
    //                 "text": value,
    //                 "id" : index,
    //                 "class" : "fallingBox",
    //             })
    //             .css({
    //                 "left" : Math.floor((Math.random()*(box-80))),
    //                 "display": "inline",
    //                 "overflow" : "hidden",
    //                 "visibility": "hidden",
    //                 "top" : "0px"
    //             }).appendTo('.box');
    //             //var test = document.getElementById(index)
    //             //console.log(test)
    //             //var word = document.getElementsByClassName("fallingBox")
    //             //console.log(word)
    //             var positionArray = this.state.positionArray.slice(0);
    //             positionArray.push(0)
    //             this.setState({
    //                 positionArray: positionArray
    //             })
    //         }, 3000 * index)
    //     }); 
    //     }
    // fallDown = () => {
    //     var lives = document.getElementById("lives")
    //     var word = document.getElementsByClassName("fallingBox")
    //     var livesLeft = parseInt(lives.innerText)
    //     var latitude;
    //     var divHeight = 480
    //     for (var i = 0; i < word.length; i++){
    //         latitude = this.state.positionArray[i]
    //         word[i].style.top = latitude + "px"; 
    //         word[i].style.display = "inline";
    //         word[i].style.visibility = "visible";
    //         word[i].style.border = "3px blue solid"

    //         var positionArray = this.state.positionArray.slice(0)
    //         positionArray[i] = latitude + 10;
    //         this.setState({
    //             positionArray: positionArray
    //         }, ()=>{console.log(this.state)})
            
    //         // when word reaches the bottom
    //         if (latitude > divHeight) { 
    //             $(".fallingBox").remove()
    //             livesLeft--
    //             $("#lives").html(livesLeft)
    //             //return;
    //         } 
    //     }
    // }


    
    // // deletes words if correctly typed
    // deleteWord = (event) => {
    //     var score = document.getElementById("score")
    //     var yourScore = parseInt(score.innerText)
    //     if (event.key === "Enter"){
    //         if (this.state.wordsArray.includes($("input:text").val())) {
    //             yourScore++
    //             $("#score").html(yourScore)
    //             $(".fallingBox:contains("+ $("input:text").val() + ")").remove()
    //             $("input:text").val("")
    //         }
    //     }
    // }

    

    render() {
        return (
            <div className="Typeback">
              
            

           </div>
          ); 
    }
}



export default TypingGame;



"able"
"acid"
"aged"
"also"
"area"
"army"
"away"
"baby"
"back"
"ball"
"band"
"bank"
"base"
"bath"
"bear"
"beat"
"been"
"beer"
"bell"
"belt"
"best"
"bill"
"bird"
"blow"
"blue"
"boat"
"body"
"bomb"
"bond"
"bone"
"book"
"boom"
"born"
"boss"
"both"
"bowl"
"bulk"
"burn"
"bush"
"busy"
"call"
"calm"
"came"
"camp"
"card"
"care"
"case"
"cash"
"cast"
"cell"
"chat"
