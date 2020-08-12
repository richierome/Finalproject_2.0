import React from 'react';
import './card.css';

const Cards = props => (
    
    <div className="space-card container ">
        
        
        <div className="space-portrait  col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <img className="space-img" alt={props.name} src={props.image}
             onClick={() => props.handleClick(props.id)} 
            />
         </div>

         <div className="space-planet-names col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
         {props.name}
        </div>
    </div>
// col-sm-2 col-md-6 col-lg-8 col-xl-12
);

export default Cards;
// row col-sm-9 col-md-6 col-lg-8 col-xl-3