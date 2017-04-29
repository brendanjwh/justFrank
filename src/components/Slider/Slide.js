import React, { Component } from 'react';

// I think the React transition can be put in here, seeing as in the slide component is re-rendered everytime a user makes a click

const Slide = (props) => {

  // Grab the current images name from the background image array stored in Slider
  const current = props.background[props.current];

  let styles = {
    imageBackground: {
      backgroundImage: `url(${current}.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }

  return (
    <div className="slide" style={styles.imageBackground}></div>
  )
}

export default Slide;
