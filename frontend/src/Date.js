import React, {Component} from 'react';
import {Range} from 'rc-slider';

export default class DateSlider extends Component {
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
            defaultValue={[0,60]}
            marks={{
              0: 'January \'11',
              13: 'January \'12',
              25: 'January \'13',
              37: 'January \'14',
              49: 'January \'15',
              60: 'December \'15'
            }}
            min={0}
            max={60}
            step={1}
            onAfterChange={this.getPositions}
            />
            {/*<button onClick={this.setAll}>All Times</button>*/}
          </div>
      </div>
    )
  }

}