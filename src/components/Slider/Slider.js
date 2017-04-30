import React, { Component } from 'react';
import axios from 'axios';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';
require('./style.scss');


export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: [],
      current: 0
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  // Pulls in config data for the slider from .json file
  componentWillMount() {
    axios.get('slider-config.json')
    .then((res) => {
      this.setImageArray(res.data);
    });
  }

  // Sets the background state property to the array of images pulled in from the componentWillMount method
  setImageArray(imageArray) {
    let newArray = [];
    for(let i = 0; i < imageArray.length; i++) {
      newArray.push(imageArray[i].image);
    }
    this.setState({ background: newArray });
  }

  render() {
    return (
      <div className="slider">
        {/* The Current Image*/}
        <Slide
          background={this.state.background}
          current={this.state.current}
        />
        {/* Arrows */}
        <LeftArrow previousSlide={this.previousSlide} />
        <RightArrow nextSlide={this.nextSlide} />
        {/* Dots */}
        <Dots
          numberOfDots={this.state.background.length}
          isCurrent={this.state.current}
          dotClick={this.dotClick}
         />
      </div>
    );
  }

  /* Handle cLicking of dots */
  dotClick(dotIndex) {
    this.setState({ current: dotIndex })
  }

  /* Previous & Next Slide Functionality */
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

} // end class
