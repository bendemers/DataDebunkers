import React, {Component} from 'react';
import {connect} from 'react-redux'

class AgeBoxes extends Component {
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
    return (
      <div className='age'>
        <h2>By Age</h2>
        <div className='choices'>
          <label className='large'><input type='checkbox'/>Show All</label>
          <label><input type='checkbox'/>Uncategorized</label>
          <label><input type='checkbox'/>Under 18</label>
          <label><input type='checkbox'/>18-25</label>
          <label><input type='checkbox'/>26-40</label>
          <label><input type='checkbox'/>41-64</label>
          <label><input type='checkbox'/>65 and over</label>
        </div>
      </div>
    )
  }
}

const mapState = ({age}) => ({
  age
})

export default connect(mapState)(AgeBoxes)