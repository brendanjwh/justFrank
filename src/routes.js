import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Slider from './components/Slider/Slider';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Slider} />
  </Route>
);
