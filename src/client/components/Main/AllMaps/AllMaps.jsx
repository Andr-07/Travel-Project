import React from 'react';
import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';


class AllMaps extends React.Component {
    state = {
        arr: []
    }

    async componentDidMount() {
        let response = await fetch('/api/all',
        {method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        })
      })
      let jsonRes = await response.json()
        console.log(">>>>>>>>>>>",jsonRes)
       this.setState ({
           arr: jsonRes
       })
    }

    render() {
      return (
  <div>
  
        <h1> Все туры:</h1>
        {this.state.arr.map(el => <ul>
            <h3>{el.tourName} - {el.description} <YMaps>
      <div>
      <h1>{this.state.title}</h1>
      </div>
      <Map style={{ height: "100px", width: "20%" }} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
      </Map>
      </YMaps></h3>
        Author: {el.userName}
        
        </ul>)}
  </div>
  
      );
    }
  }

  export default AllMaps;
