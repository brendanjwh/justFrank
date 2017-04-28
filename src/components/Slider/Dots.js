import React, { Component } from 'react';
import Dot from './Dot';

const Dots = (props) => {

  const numberOfDots = []

  for(let i = 0; i < props.numberOfDots; i++) {
    numberOfDots.push(<Dot />)
  }

  return (
    <div className="dotsContainer">
      {numberOfDots}
    </div>
  )
}

export default Dots
