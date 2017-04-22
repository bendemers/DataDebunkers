import React, {Component} from 'react';
import {Range} from 'rc-slider';

export default class TimeSlider extends Component {
  constructor () {
    super()

    this.state = {
      start: 0,
      end: 24,
    }

    this.setAll = this.setAll.bind(this);
    this.getPositions = this.getPositions.bind(this);
  }

  setAll () {
    this.setState({
      start: 0,
      end: 24
    })
    const handles = document.querySelectorAll('#time .rc-slider-handle');
    handles[0].style.left = '0%';
    handles[1].style.left = '100%';
    const track = document.querySelector('#time .rc-slider-track');
    track.style.left = '0%'
    track.style.width = '100%'
  }

  getPositions () {
    const handles = document.querySelectorAll('#time .rc-slider-handle');
    const place1str = handles[0].style.left.slice(0, -1)
    const place1 = 24 * Number(place1str) / 100;
    const place2str = handles[1].style.left.slice(0, -1)
    const place2 = 24 * Number(place2str) / 100;
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
      <div id='time' className='slider'>
        <h2>Time of day</h2>
        <div className='interact'>
          <Range 
            defaultValue={[0,24]}
            marks={{
              0: 'Midnight',
              3: '3am',
              6: '6am',
              9: '9am',
              12: 'Noon',
              15: '3pm',
              18: '6pm',
              21: '9pm',
              24: 'Midnight'
            }}
            min={0}
            max={24}
            step={.5}
            onAfterChange={this.getPositions}
            />
            <button onClick={this.setAll}>All Times</button>
          </div>
      </div>
    )
  }

}