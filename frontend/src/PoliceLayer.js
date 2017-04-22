import {Component} from 'react'

export default class PoliceLayer extends Component{
  componentWillUpdate() {
    if( this.layer) this.layer.setMap(null)
  }

  render() {
    const props = this.props
    this.layer = props.map ? new props.maps.FusionTablesLayer({
         query: {
          select: "col2",
           from: "1mWfDvQihwkE8RststaEn_UopOQ0xLhWzwhls1UdU"
         },
         map: props.map,
         styleId: 2,
        templateId: 2
       }) : null
        
    
    return null
  }
    
}
