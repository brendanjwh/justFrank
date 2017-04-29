import React, { Component } from 'react';
import Dot from './Dot';

const Dots = (props) => {

  const numberOfDots = [];

  // Push a set of Dot JSX components into the numberOfDots array.
  // The number of dots pushed into the array is directly related
  // and the same as the number of images in the Slider image array.
  for(let i = 0; i < props.numberOfDots; i++) {
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
