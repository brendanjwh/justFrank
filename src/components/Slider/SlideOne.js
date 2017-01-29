import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const SlideOne = (props) => {

  let background = {
    backgroundImage: 'url(martin.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  // This variable is used in the if else statement below
  // to ensure that a transition is not applied to the first
  // slide on initial page load.
  let slide;

  if(props.isLoaded === false) {
    slide = <div style={background} className="slide"></div>
  }
  else {
    slide = <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={700}
      transitionEnter={false}
      transitionLeave={false}>
      <div style={background} className="slide"></div>
    </ReactCSSTransitionGroup>
  }

  return slide;
}

export default SlideOne;
