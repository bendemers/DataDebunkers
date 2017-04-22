import React, {Component} from 'react';
import {connect} from 'react-redux';

import {hideLayer, showLayer} from './reducers/layers.js';

class RaceBoxes extends Component {
  constructor () {
    super()

    this.singleBox = this.singleBox.bind(this);
    // this.largeBox = this.largeBox.bind(this);
  }

  singleBox (e) {
    if(e.target.checked){
      this.props.showLayer(e.target.name)
    } else {
      this.props.hideLayer(e.target.name)
    }
  }

  // largeBox (e) {
  //   if(e.target.checked){
  //     this.props.addAll();
  //   } else {
  //     this.props.clearAll();
  //   }
  // }

  render () {
    const all = this.props.layers.police && this.props.layers.schools
    return (
      <div className='choose-layers'>
        <div className='choices'>
          <label><input name='police' type='checkbox' onClick={this.singleBox} checked={this.props.layers.police}/>Show police stations</label>
          <label><input name='schools' type='checkbox' onClick={this.singleBox} checked={this.props.layers.schools}/>Show schools</label>
          {/*<label className='large' ><input type='checkbox' onClick={this.largeBox} checked={all}/>{all ? 'Show Neither' : 'Show Both'} </label>*/}
        </div>
      </div>
    )
  }
}

const mapState = ({layers}) => ({
  layers
})

const mapDispatch = (dispatch) => ({
  hideLayer: (name) => {
    dispatch(hideLayer(name));
  },
  showLayer: (name) => {
    dispatch(showLayer(name));
  }
})

export default connect(mapState, mapDispatch)(RaceBoxes)