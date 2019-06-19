import React from 'react';

import Menu from '../Menu';


import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';


class Profile extends React.Component {
  state = {
    title: '',
    tourName:'',
    allMarks: [],
    allLines: []
  }

  async componentDidMount() {
    let response = await fetch('/api/profile',
    {method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName: 'Katrin',
    })
  })
    let jsonRes = await response.json()
    console.log(jsonRes.allMarks)
    
    this.setState({
      allMarks: jsonRes.allMarks,
      allLines:  jsonRes.allLines,
      title: jsonRes.tourName
    })
  }


  render() {

    return (

      <YMaps>
      <div>
 
      <h1>{this.state.title}</h1>
      </div>
      <Map style={{ height: "300px", width: "30%" }} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
      {this.state.allMarks.map(el => 
      <Placemark geometry={el.coors} 
      properties={{
        balloonContentHeader: `Пункт№ ${el.i} - ${el.balloonInput}`
      }}
      options={{
        iconLayout: 'default#image',
        iconImageHref: `https://img.icons8.com/color/48/000000/${el.i}-circle.png`
    }}
      modules={
        ['geoObject.addon.balloon', 'geoObject.addon.hint', 'geoObject.addon.editor']
    }
      
      /> )}
      <Polyline
                            geometry={[...this.state.allLines]}
                            options={{
                                balloonCloseButton: false,
                                strokeColor: '#DC143C',
                                strokeWidth: 3,
                                strokeOpacity: 0.5,
                            }}
                        />

      </Map>
      </YMaps>

    )

  }
}



export default Profile;