// import React, { Component } from 'react';


// class SpaceAlienAnimation extends Component {
//     componentDidMount() {
//         console.log(document);
//     }

//     render(){
//         return (
//             <div>
//                 <img src="./astro4.png" id="issImage" alt="test" />

//                 <img src="./alien.png"  id="alienImage" alt="test2" />
//             </div>
//         )
//     }
// }
// componentDidMount(){
    
//     console.log('mountingagain');
//     let images = {
//       spaceShip: "alienImage",
//       satellite: "issImage"
//     }


//     let screenWidth = 1100;

//     const spaceShip = {
    
//         noradNumber: 25544,
//         name: "alien",
//         longitude: 0
//       }

//     const floatSpaceShip = (screenWidth) => {
//       spaceShip.longitude += 5;

//       if(spaceShip.longitude > screenWidth) spaceShip.longitude = -7 * screenWidth;

//       document.getElementById(images.spaceShip).style.right = spaceShip.longitude + "px";
//     }

//     if(document.getElementById(images.spaceShip) !== null) {
//       document.getElementById(images.spaceShip).style.right = spaceShip.longitude + "px";
//       setTimeout(() => {
//         floatSpaceShip(screenWidth);
//       }, 5);
//     };

//     // var screenWidth = 1100;
//     // function floatSpaceShip(){
//     // spaceShip.longitude += 5;
//     // if ( spaceShip.longitude > screenWidth){
//     // spaceShip.longitude = -7 * screenWidth;

//     // }
//     // //console.log("Longitude", spaceShip.longitude);
//     // var s = document.getElementById("alienImage");
//     // //console.log(s)
//     // s.style.right=spaceShip.longitude + "px";
//     // setTimeout(()=>{floatSpaceShip()}, 5);
//     // }


//     const satellite = {
//         noradNumber: 25544,
//         name: "International Space Station",
//         longitude: 0
//     }

//     const floatSatellite = (screenWidth) => {
//       satellite.longitude -= 5;

//       if(satellite.longitude > screenWidth) satellite.longitude = -7 * screenWidth;

//       document.getElementById(images.satellite).style.right = satellite.longitude + "px";
//     }

//     if(document.getElementById(images.satellite) !== null) {
//       document.getElementById(images.satellite).style.right = satellite.longitude + "px";
//       setTimeout(() => {
//         floatSatellite(screenWidth);
//       }, 5);
//     }
    

    
//     // function floatSatellite(){
//     // satellite.longitude -= 5;
//     // if ( satellite.longitude > screenWidth){
//     // satellite.longitude = -7 * screenWidth;

//     // }
//     // //console.log("Longitude", satellite.longitude);
//     // var d = document.getElementById("issImage"); // ship
//     // //console.log(d)
//     //  d.style.right =satellite.longitude + "px";
//     // setTimeout(()=>{floatSatellite()}, 5);

//     // }


   
      
//     //  floatSatellite()
//     //  floatSpaceShip()   
    
// }


// export default SpaceAlienAnimation;