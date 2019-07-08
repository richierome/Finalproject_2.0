import React, { Component } from "react";
import FriendCard from "./components/FriendCard/index";
import BNav from "./components/BNav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.js";
import "./Alphabet.css";
import Sound from 'react-sound';
import swal from 'sweetalert';



function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class Alphabet extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
    sound: null,
    status: Sound.status.PLAYING,
    currentId: 0,
  };

  handleClick = (id,sound) => {
    
    if (this.state.currentId === id){ 
      var audio = new Audio(sound);
      audio.play();
      console.log ("correct")
        let increaseCurrentId = this.state.currentId +1;
        this.handleIncrement();
        this.setState({ clicked: this.state.clicked.concat(id), currentId:increaseCurrentId });
      }  
    else {
      swal("Oopsie", "Please try again.", "error")
      this.handleReset()
  }  
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "You are correct!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 26) {
      this.setState({ rightWrong: "You are correct!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      // rightWrong: "Try again!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <div className="Alphabet">
        {this.state.sound}
      <Wrapper>
        <BNav
          title="Alphabet Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          To start click the letter A and end with the letter Z. Be sure to only click each letter once!
        </Title>

        <Container fluid={true}>
          <Row>
            {this.state.friends.map(friend => (
              <Column key={friend.id} size="md-2 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                  sound={friend.sound}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </div>
    );
  }
}

export default Alphabet;