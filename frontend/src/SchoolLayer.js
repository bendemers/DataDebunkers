import {Component} from 'react'

export default class SchoolLayer extends Component{
  componentWillUpdate() {
    if( this.layer) this.layer.setMap(null)
  }

  render() {
    const props = this.props
    this.layer = props.map ? new props.maps.FusionTablesLayer({
         query: {
          select: "col4",
          from: "1xJi14j_d4XHMyAegl0VfS0naKDaebTevx8ZyCfs4"
         },
         map: props.map,
         styleId: 2,
        templateId: 2
       }) : null
        
    
    return null
  }
    
}