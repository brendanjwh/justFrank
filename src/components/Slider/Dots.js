import React, { Component } from 'react';
import Dot from './Dot';

const Dots = (props) => {

  let numberOfDots = [];

  for(let i = 0; i < props.numberOfDots; i++) {
    let name = (props.isCurrent === i) ? "isCurrent dot" : "dot";
    numberOfDots.push(<Dot key={i} name={name} dotClick={props.dotClick} dotIndex={i} />)
  }

  return (
    <div className="dotsContainer">
      {numberOfDots}
    </div>
  )
}

export default Dots
