import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';
require('./style.scss');

/* To Do */
/*
  => Dot Functionality should be next
  => User is now able to cycle through all images, back and forth.
     However, I am concerned that using only one slide component won't work
     with react transitions, but I am not sure yet.
*/

export default class Slider extends Component {
  constructor(props) {
    super(props);

    // User just needs to set the name of each picture in whatever order they would like.
    // This array is passed down to the child Slide as props.
    this.state = {
      background: ['aurora','canyon','martin'],
      current: 0
    }

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide() {
    let current = this.state.current;
    let imageArray = this.state.background.length - 1;

    if(current >= 1)
      this.setState({ current: current - 1 })
    if(current === 0)
      this.setState({ current: imageArray })
  }

  nextSlide() {
    let current = this.state.current;
    let imageArray = this.state.background.length - 1;

    if((current >= 0) && (current !== imageArray))
      this.setState({ current: current + 1 })
    if(current === imageArray) {
      this.setState({ current: 0 })
    }
  }

  render() {
    return (
      <div className="slider">
        {/* There are no more individual slides, you only need one Slide Component */}
        <Slide background={this.state.background} current={this.state.current} />

        {/* Arrow Functionality */}
        <LeftArrow previousSlide={this.previousSlide} />
        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
}
