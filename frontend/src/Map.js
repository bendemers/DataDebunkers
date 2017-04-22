import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react';

import Layer from './Layer.js'

export default class Map extends Component {
  constructor () {
    super()
    this.state ={
      map: null,
      maps: null
    }

    this.setMap = this.setMap.bind(this);
  }

   setMap (newStates) {
    this.setState(newStates);
  }
    // var map;
    // var layer_1;
    // var layer_0;
    // var layer_2;
    // function initialize() {
    //   map = new google.maps.Map(document.getElementById('map-canvas'), {
    //     center: new google.maps.LatLng(42.31360891585424, -71.10714513921745),
    //     zoom: 12
    //   });
    //   var style = [
    //     {
    //       featureType: 'all',
    //       elementType: 'all',
    //       stylers: [
    //         { saturation: -62 }
    //       ]
    //     },
    //     {
    //       featureType: 'poi',
    //       elementType: 'all',
    //       stylers: [
    //         { visibility: 'off' }
    //       ]
    //     }
    //   ];
    //   var styledMapType = new google.maps.StyledMapType(style, {
    //     map: map,
    //     name: 'Styled Map'
    //   });
    //   map.mapTypes.set('map-style', styledMapType);
    //   map.setMapTypeId('map-style');
    //   layer_1 = new google.maps.FusionTablesLayer({
    //     query: {
    //       select: "col1",
    //       from: "1x_q6EaIR8z6cV1SMcY7B23WE4yf5WuJwnWy72E7_",
    //       where: " col4 >= '1964 Feb 19' and col4 <= '2010 Feb 19'"
    //     },
    //     map: map,
    //     styleId: 3,
    //     templateId: 3
    //   });
    //   layer_0 = new google.maps.FusionTablesLayer({
    //     query: {
    //       select: "col4",
    //       from: "1xJi14j_d4XHMyAegl0VfS0naKDaebTevx8ZyCfs4"
    //     },
    //     map: map,
    //     styleId: 2,
    //     templateId: 2
    //   });
    //   layer_2 = new google.maps.FusionTablesLayer({
    //     query: {
    //       select: "col2",
    //       from: "1mWfDvQihwkE8RststaEn_UopOQ0xLhWzwhls1UdU"
    //     },
    //     map: map,
    //     styleId: 2,
    //     templateId: 2
    //   });
    // }
    // google.maps.event.addDomListener(window, 'load', initialize);
  render () {
    return (
    <div id='map-canvas'>
      <GoogleMapReact
      gestureHandling={'greedy'}
      defaultCenter={[42.31360891585424, -71.10714513921745]}
      defaultZoom={14}
      onGoogleApiLoaded={({ map, maps }) => {this.setMap({ map: map, maps:maps, mapLoaded: true }) }}
          yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
      <Layer
                              map={this.state.map}
                              maps={this.state.maps} 
                              />
    </div>
  )
  }
}