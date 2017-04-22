import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Range} from 'rc-slider';

import {setStart, setEnd} from './reducers/date.js'

import Label from './Label.js'

class DateSlider extends Component {
  constructor () {
    super()

    this.getPositions = this.getPositions.bind(this);
  }

  getPositions () {
    const handles = document.querySelectorAll('#date .rc-slider-handle');
    const place1str = handles[0].style.left.slice(0, -1)
    const place1 = Math.round(59 * Number(place1str) / 100);
    const place2str = handles[1].style.left.slice(0, -1)
    const place2 = Math.round(59 * Number(place2str) / 100);
    if (place1 < place2) {
      if (place1 !== this.props.start) this.props.setStart(place1);
      if (place2 !== this.props.end) this.props.setEnd(place2)
    } else {
      if (place2 !== this.props.start) this.props.setStart(place2);
      if (place1 !== this.props.end) this.props.setEnd(place1)
    }
  }
  
  render () {
    return (
      <div id='date' className='slider'>
        <h2>Date</h2>
        <div className='interact'>
          <div className='place-labels'>
            <Label number={this.props.start}/>
            <Label number={this.props.end}/>
          </div>
          <Range 
            defaultValue={[this.props.start, this.props.end]}
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

const mapState = ({date}) => ({
  start: date.start,
  end: date.end
})

const mapDispatch = (dispatch) => ({
  setStart: (num) => {
    dispatch(setStart(num))
  },
  setEnd: (num) => {
    dispatch(setEnd(num))
  }
})

export default connect()(DateSlider)