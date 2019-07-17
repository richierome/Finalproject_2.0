import React, { Component }from 'react';
// import logo from './logo.svg';
import './Space.css';
import './components/wrapper/wrapper.css';
import Cards from './components/cards/Cards';
import Navbar from './components/navabar/Navbar';
import Wrapper from './components/wrapper/Wrapper';
import characters from './character';
import Sound from 'react-sound';
import MyMp3 from './components/mp3/Large-Fireball.mp3';
import YouTube from 'react-youtube';
// import SpaceAlienAnimation from './components/spaceAlienAnimation/SpaceAlienAnimation';

import alien from '../../images/alien.png';
import astro from '../../images/astro4.png';

const soundArray = [
  MyMp3, 
  MyMp3,
  MyMp3, 
  MyMp3,
  MyMp3, 
  MyMp3,
  MyMp3, 
  MyMp3,
  MyMp3, 
  MyMp3,
  MyMp3,
  MyMp3
 

]

class Space extends Component {

  state = {
    characters: characters.map(character => ({...character})),
    name: true,
    cardGuess: "",
    currentScore: 0,
    highScore: 0, 
    sound: null,
    status: Sound.status.PLAYING,
    modal: false,
    modal2: false,
    modal3: false
  };
 
  
  componentDidMount(){
    
    console.log('mountingagain');
    let images = {
      spaceShip: "alienImage",
      satellite: "issImage"
    }

    let screenWidth = 1100;

    const spaceShip = {
    
        noradNumber: 25544,
        name: "alien",
        longitude: 0
      }

    const floatSpaceShip = (screenWidth) => {
      spaceShip.longitude += 5;

      if(spaceShip.longitude > screenWidth) spaceShip.longitude = -7 * screenWidth;

      document.getElementById(images.spaceShip).style.right = spaceShip.longitude + "px";
    }

    if(document.getElementById(images.spaceShip) !== null) {
      document.getElementById(images.spaceShip).style.right = spaceShip.longitude + "px";
      setTimeout(() => {
        floatSpaceShip(screenWidth);
      }, 5);
    };

    // var screenWidth = 1100;
    // function floatSpaceShip(){
    // spaceShip.longitude += 5;
    // if ( spaceShip.longitude > screenWidth){
    // spaceShip.longitude = -7 * screenWidth;

    // }
    // //console.log("Longitude", spaceShip.longitude);
    // var s = document.getElementById("alienImage");
    // //console.log(s)
    // s.style.right=spaceShip.longitude + "px";
    // setTimeout(()=>{floatSpaceShip()}, 5);
    // }


    const satellite = {
        noradNumber: 25544,
        name: "International Space Station",
        longitude: 0
    }

    const floatSatellite = (screenWidth) => {
      satellite.longitude -= 5;

      if(satellite.longitude > screenWidth) satellite.longitude = -7 * screenWidth;

      document.getElementById(images.satellite).style.right = satellite.longitude + "px";
    }

    if(document.getElementById(images.satellite) !== null) {
      document.getElementById(images.satellite).style.right = satellite.longitude + "px";
      setTimeout(() => {
        floatSatellite(screenWidth);
      }, 5);
    }
    

    
    // function floatSatellite(){
    // satellite.longitude -= 5;
    // if ( satellite.longitude > screenWidth){
    // satellite.longitude = -7 * screenWidth;

    // }
    // //console.log("Longitude", satellite.longitude);
    // var d = document.getElementById("issImage"); // ship
    // //console.log(d)
    //  d.style.right =satellite.longitude + "px";
    // setTimeout(()=>{floatSatellite()}, 5);

    // }


   
      
    //  floatSatellite()
    //  floatSpaceShip()   
    
}

  handleClick = id => {
    const chosenCharacter = this.state.characters.find(name => name.id === id);

    if (chosenCharacter.clicked === false) {
      chosenCharacter.clicked = true;
      // console.log(characters[id].sound)
      this.setState({
        sound: <Sound
        url={soundArray[characters[id].sound]}
        playStatus={Sound.status.PLAYING}
        playFromPosition={100 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
      })
      setTimeout (()=> {
        const shuffleCharacters = this.state.characters.sort((a, b) => 0.5- Math.random());
        this.setState({character:shuffleCharacters})
        this.handleIncrement();
      }, .50000)
    }
    else {

      if (this.state.currentScore === 12) {
        alert("YOU WON!!");
        this.setState({
          highScore: this.state.currentScore,
          currentScore: 0,
          characters: characters.map(character => ({...character})),
          modal3:true
        });
      }

      else if (this.state.currentScore > this.state.highScore) {
        console.log("modal");
        alert("You almost got it! Here is some inspiration!")
        this.setState({
          highScore: this.state.currentScore,
          currentScore: 0,
          characters: characters.map(character => ({...character})),
          modal:true
        });
      }

      else {
      
      
        alert("Almost, lets check out the Moon then Try it again!")
        this.setState({
          currentScore: 0,
          characters: characters.map(character => ({...character})),
          modal2:true
        });
      }
    }
  }

handleIncrement = () => {
  this.setState({currentScore: this.state.currentScore + 1 });
  
}

closeModal = () => {
 this.setState({modal:false});
}

closeModal2 = () => {
  this.setState({modal2:false});
}

closeModal3 = () => {
  this.setState({modal3:false});
}

render(){
  const { handleClick } = this
  const { highScore,currentScore,cardGuess }= this.state
  let cardCharacters = this.state.characters.map((character,index) => {
    return (<div className="col-3" key={index}><Cards id={character.id}  name={character.name} image={character.image} handleClick={this.handleClick}/> </div>)
    
  });

  const opts = {
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  let modal = 
    <div style={{margin: 'auto', width:'100%'}}>
        <YouTube
        videoId="mibxJwpennU"
        opts={opts}
        onReady={this._onReady}/>

          <p style={{color:'red'}}>Our Solar System</p>
          <button  type="button" class="btn btn-primary" onClick={this.closeModal}>Close Video</button>

     </div>


  
     
    
      let modal2 = 
        <div style={{margin: 'auto',width:'100%'}}>
            <YouTube
            videoId="w4U_cuF-_hI"
            opts={{
              height: '300',
              width: '100%',
              playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
              }
            }}
            onReady={this._onReady}/>
    
              <p style={{color:'red'}}>The Moon</p>
              <button  type="button" class="btn btn-primary" onClick={this.closeModal2}>Close Video</button>
    
         </div>

          let modal3 = 
          <div style={{margin: 'auto',width:'100%'}}>
              <YouTube
              videoId="V4_c4DUseLU"
              opts={{
                height: '300',
                width: '100%',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                  autoplay: 1
                }
              }}
              onReady={this._onReady}/>
      
                <p style={{color:'red'}}>Mars the red planet</p>
                <button  type="button" class="btn btn-primary" onClick={this.closeModal3}>Close Video</button>
      
           </div>
    

  return(
   <div className="Space-body container-fluid" style={{overflow: 'hidden'}}>
     <div style={{position: 'relative', left: '0', height: '0', top: '10px'}}>      
     
     </div>
     {
       this.state.sound
       
     }
     
      
    
     <Navbar
     highScore={highScore}
     currentScore={currentScore}
     cardGuess={cardGuess} 
     />
    
   {this.state.modal ? modal: null}
   {this.state.modal2 ? modal2: null}
   {this.state.modal3 ? modal3: null}
      
   <Wrapper cardCharacters={cardCharacters}  /> 
  { handleClick }
   </div>

  )
}

}
export default Space;