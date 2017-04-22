import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addSet, removeSet, addAll, clearAll} from './reducers/race.js';

class RaceBoxes extends Component {
  constructor () {
    super()

    this.singleBox = this.singleBox.bind(this);
    this.largeBox = this.largeBox.bind(this);
  }

  singleBox (e) {
    if(e.target.checked){
      this.props.addSet(Number(e.target.name))
    } else {
      this.props.removeSet(Number(e.target.name))
    }
  }

  largeBox (e) {
    if(e.target.checked){
      this.props.addAll();
    } else {
      this.props.clearAll();
    }
  }

  render () {
    const all = this.props.race.every(ele=>ele)
    return (
      <div className='race'>
        <h2>By Race</h2>
        <div className='choices'>
          <label className='large' ><input type='checkbox' onClick={this.largeBox} checked={all}/>{all ? 'Show None' : 'Show All'} </label>
          <label><input name='0' type='checkbox' onClick={this.singleBox} checked={this.props.race[0]}/>Uncategorized</label>
          <label><input name='1' type='checkbox' onClick={this.singleBox} checked={this.props.race[1]}/>Asian/Pacific Islander</label>
          <label><input name='2' type='checkbox' onClick={this.singleBox} checked={this.props.race[2]}/>Black</label>
          <label><input name='3' type='checkbox' onClick={this.singleBox} checked={this.props.race[3]}/>Hispanic</label>
          <label><input name='4' type='checkbox' onClick={this.singleBox} checked={this.props.race[4]}/>White</label>
          <label><input name='5' type='checkbox' onClick={this.singleBox} checked={this.props.race[5]}/>American Indian/Alskan Native</label>
          <label><input name='6' type='checkbox' onClick={this.singleBox} checked={this.props.race[6]}/>Middle Eastern/East Indian</label>
        </div>
      </div>
    )
  }
}

const mapState = ({race}) => ({
  race
})

const mapDispatch = (dispatch) => ({
  addSet: (num) => {
    dispatch(addSet(num));
  },
  removeSet: (num) => {
    dispatch(removeSet(num));
  },
  addAll: () => {
    dispatch(addAll());
  },
  clearAll: () => {
    dispatch(clearAll())
  }
})

export default connect(mapState, mapDispatch)(RaceBoxes)