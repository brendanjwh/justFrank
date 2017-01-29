import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const SlideTwo= (props) => {

  let background = {
    backgroundImage: 'url(canyon.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={700}
      transitionEnter={false}
      transitionLeave={false}>
      <div style={background} className="slide"></div>
    </ReactCSSTransitionGroup>
  );
}

export default SlideTwo;
