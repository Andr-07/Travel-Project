import React from 'react';
import { YMaps, Map, Polyline, Button } from 'react-yandex-maps';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      center: [55.74, 37.58],
      zoom: 15,
      coords: [],
      draw: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.polylineButton = this.polylineButton.bind(this)
  }

  handleClick = (event) => {
    let coords1 = event.get('coords')
    if (this.state.draw === true) {
      this.setState(prevState => {
          return {
            coords: [...prevState.coords, coords1]
          }
      })
    }
  }

  polylineButton = () => {
    this.setState(prevState => {
      return prevState.draw = !this.state.draw
    })
  }

  render() {

    return (
      <YMaps>
        <div>My awesome application with maps!</div>
        <Map
          style={{ width: "80%", height: "600px" }}
          onClick={this.handleClick}
          defaultState={this.state} >
          <Button
            data={{ content: 'yfgbcfnm!' }}
            options={{ maxWidth: 128 }}
            defaultState={{ selected: false }}
            onClick={this.polylineButton}
          />
          <Polyline
            geometry={[...this.state.coords]}
            options={{
              balloonCloseButton: false,
              strokeColor: '#DC143C',
              strokeWidth: 3,
              strokeOpacity: 0.5,
            }}
          />
        </Map>
      </YMaps>
    );
  }
}

export default App;
