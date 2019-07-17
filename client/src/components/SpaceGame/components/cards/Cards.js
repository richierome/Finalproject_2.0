import React from 'react';
import './card.css';

const Cards = props => (
    
    <div className="space-card container ">
        
        
        <div className="space-portrait  col-sm-2 col-md-6 col-lg-8 col-xl-12 ">
            <img className="space-img" alt={props.name} src={props.image}
             onClick={() => props.handleClick(props.id)} 
            />
         </div>

         <div className="space-planet-names  col-sm-2 col-md-6 col-lg-8 col-xl-12">
         {props.name}
        </div>
    </div>

);

export default Cards;
// row col-sm-9 col-md-6 col-lg-8 col-xl-3