import React from 'react';
import CenterMode from '../CenterMode/CenterMode'
// import Menu from '../Menu';
import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';

class Profile extends React.Component {

  render() {
    return (
      <YMaps>
        <Map style={{ height: "400px", width: "100%" }} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
        </Map>
        <CenterMode />
      </YMaps>
    );
  }
}

export default Profile;