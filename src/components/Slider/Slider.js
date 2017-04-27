import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';
require('./style.scss');

/* To Do */
/*
  => Add Dots & Arrow Funtionality
*/

export default class Slider extends Component {
  constructor(props) {
    super(props);

    // User just needs to set the name of each picture in whatever order they would like.
    // This array is passed down to the child Slide as props.
    this.state = {
      background: ['aurora','canyon','martin']
    }
  }

  render() {
    return (
      <div className="slider">
        {/* There are no more individual slides, you only need one Slide Component */}
        <Slide background={this.state.background} current={1} />
      </div>
    );
  }
}
