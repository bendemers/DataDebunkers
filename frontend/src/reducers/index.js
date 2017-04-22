import {combineReducers} from 'redux'

import date from './date';
import race from './race';
// import age from './age';
import layers from './layers';

export default combineReducers({
  date,
  race,
  layers
  // age
});