import React from 'react';
// import Menu from '../Menu';
import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';


class Profile extends React.Component {


  render() {
    return (
      <YMaps>

 
      <Map style={{ height: "600px", width: "100%" }} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>

      </Map>
   

      </YMaps>
    );
  }
}



export default Profile;