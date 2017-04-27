import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const SlideOne = (props) => {
  let background = {
    backgroundImage: 'url(martin.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div style={background} className="slide"></div>
  )
}

export default SlideOne;
