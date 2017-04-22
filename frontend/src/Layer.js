import React, {Component} from 'react';
import {connect} from 'react-redux';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


class Layer extends Component {
  componentWillUpdate() {
    if( this.layer_1) this.layer_1.setMap(null)
  }

  render () {
    const props = this.props
    console.log(props)
    const startMonth = months[props.date.start % 12];
    const startYear = 2000 + Math.floor(props.date.start/12) + 11;
    const endMonth = months[props.date.end % 12];
    const endYear = 2000 + Math.floor(props.date.end/12) + 11;

    const whereString = `col4 >= '${startYear} ${startMonth} 1' and col4 <= '${endYear} ${endMonth} 31'`
    console.log(whereString)
    this.layer_1 = props.map ? new props.maps.FusionTablesLayer({
          query: {
            select: "col1",
            from: "1x_q6EaIR8z6cV1SMcY7B23WE4yf5WuJwnWy72E7_",
            where: whereString
          },
          map: props.map,
          styleId: 3,
          templateId: 3
        }) : null
        
    
    return null
  }
}
  
const mapState = ({date}) => ({
  date
})

export default connect(mapState)(Layer)