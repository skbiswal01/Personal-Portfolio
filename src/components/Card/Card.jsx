import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail,time,location, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{color :"var(--gray)", fontSize:"16px"}}>{detail}</span>
      <span style={{color : "var(--gray)", fontSize:"16px"}}>{time}</span>
      <span style={{color : "var(--gray)", fontSize:"16px"}}>{location}</span>
    </div>
  );
};

export default Card;
