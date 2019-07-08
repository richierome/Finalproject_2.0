import React from 'react';
import './card.css';

const Cards = props => (
    <div className="space-card ">
        <div className="space-planet-names">
         <div class="space-portrait square landscape">
            <img className="space-img" alt={props.name} src={props.image}
             onClick={() => props.handleClick(props.id)} 
            />
         </div>
         {props.name}
        </div>
    </div>

);

export default Cards;