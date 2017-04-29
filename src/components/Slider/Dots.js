import React, { Component } from 'react';
import Dot from './Dot';

const Dots = (props) => {

  const numberOfDots = []

  for(let i = 0; i < props.numberOfDots; i++) {
    console.log("current: " + props.isCurrent + " " + "i: " + i)
    let name = (props.isCurrent === i) ? "isCurrent dot" : "dot";
    numberOfDots.push(<Dot name={name} />)
  }

  return (
    <div className="dotsContainer">
      {numberOfDots}
    </div>
  )
}

export default Dots
