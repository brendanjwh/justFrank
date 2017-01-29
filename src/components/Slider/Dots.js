import React, { Component } from 'react';

const Dots = (props) => {
  return (
    <div className="dotsContainer">
      <span className={props.slideCount === 1 ? "active dot" : "dot"}></span>
      <span className={props.slideCount === 2 ? "active dot" : "dot"}></span>
      <span className={props.slideCount === 3 ? "active dot" : "dot"}></span>
    </div>
  );
}

export default Dots;
