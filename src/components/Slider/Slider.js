import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';
require('./style.scss');

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1,
      sliderLoaded: false
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  render() {

    return (
      <div className="slider">

        {/* Slides go here */}
        { this.state.slideCount === 1 ? <SlideOne isLoaded={this.state.sliderLoaded} /> : null }
        { this.state.slideCount === 2 ? <SlideTwo /> : null }
        { this.state.slideCount === 3 ? <SlideThree /> : null }

        {/* Arrow Functionality */}
        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />

        {/* Dots */}
        <Dots slideCount={this.state.slideCount} />

      </div>
    );
  }

  nextSlide() {
    if(this.state.slideCount >= 3) {
      this.setState({ slideCount: 1, sliderLoaded: true })
    }
    else {
      this.setState({ slideCount: this.state.slideCount + 1 })
    }
  }

  previousSlide() {
    if(this.state.slideCount <= 1) {
      this.setState({ slideCount: 3 })
    }
    else {
      this.setState({ slideCount: this.state.slideCount - 1 })
    }
  }
}
