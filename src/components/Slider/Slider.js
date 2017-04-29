import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';
require('./style.scss');

/*
To Do

  => Heroku auto-push needs to be fixed
  => The images need to be preloaded somehow. Reason being, is that the first time the user goes through the
     slider, the images have to load and sometimes give you a gross looking flash of white before the image appears
  => Create new branch, and instead have all the necessary data load from a .json file, instead of inside the component

*/

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: ['aurora','canyon','martin'],
      current: 0
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  render() {
    return (
      <div className="slider">
        <Slide
          background={this.state.background}
          current={this.state.current}
        />

        <LeftArrow previousSlide={this.previousSlide} />
        <RightArrow nextSlide={this.nextSlide} />

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
