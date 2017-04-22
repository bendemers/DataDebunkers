import React, {Component} from 'react';
import {Range} from 'rc-slider';

import Label from './Label.js'

export default class DateSlider extends Component {
  constructor () {
    super()

    this.state = {
      start: 0,
      end: 59,
    }

    this.setAll = this.setAll.bind(this);
    this.getPositions = this.getPositions.bind(this);
  }

  setAll () {
    this.setState({
      start: 0,
      end: 59
    })
    const handles = document.querySelectorAll('#date .rc-slider-handle');
    handles[0].style.left = '0%';
    handles[1].style.left = '100%';
    const track = document.querySelector('#date .rc-slider-track');
    track.style.left = '0%'
    track.style.width = '100%'
  }

  getPositions () {
    const handles = document.querySelectorAll('#date .rc-slider-handle');
    const place1str = handles[0].style.left.slice(0, -1)
    const place1 = Math.round(59 * Number(place1str) / 100);
    const place2str = handles[1].style.left.slice(0, -1)
    const place2 = Math.round(59 * Number(place2str) / 100);
    if (place1 < place2) {
      this.setState({
        start: place1,
        end: place2
      })
    } else {
      this.setState({
        start: place2,
        end: place1
      })
    }
  }
  
  render () {
    return (
      <div id='date' className='slider'>
        <h2>Date</h2>
        <div className='interact'>
          <div className='place-labels'>
            <Label number={this.state.start}/>
            <Label number={this.state.end}/>
          </div>
          <Range 
            defaultValue={[0,59]}
            marks={{
              0: 'January \'11',
              12: 'January \'12',
              24: 'January \'13',
              36: 'January \'14',
              48: 'January \'15',
              59: 'December \'15'
            }}
            min={0}
            max={59}
            step={1}
            onChange={this.getPositions}
            onAfterChange={this.getPositions}
            />
            {/*<button onClick={this.setAll}>All Times</button>*/}
          </div>
      </div>
    )
  }

}