import React from "react";
import "./FriendsCard.css";

const FriendCard = props => (
  <div 
    className="alphabet-card" 
    value={props.id} 
    onClick={() => {
      props.handleClick(props.id,props.sound)
    }
  }
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;