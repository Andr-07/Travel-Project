import React from 'react';


import Cookies from 'universal-cookie';
import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';


const cookies = new Cookies();

class ProfileOneTour extends React.Component {
  state = {
    title: '',
    tourName: '',
    allMarks: [],
    allLines: [],
    center: [],
    numberOfMap: '',
    resJson: null,
  }

  async componentDidMount() {
    
    let response = await fetch('/api/profile',
    {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: cookies.get('name'),
        })
      })
      let jsonRes = await response.json()


      console.log('lengthlengthlength', jsonRes.length)
      console.log('numbernumber', this.props.number)
      this.setState({resJson: jsonRes});
      // this.setState({
        //   allMarks: jsonRes[this.props.number].allMarks,
        //   allLines: jsonRes[this.props.number].allLines,
        //   title: jsonRes.tourName,
        //   center: jsonRes[this.props.number].allMarks[1].coors
    // })
        this.props.createLinks(this.state.resJson.length)
  }

  render() {
    if (!this.state.resJson) {
      return <div>Loading...</div>
    }

    const tour = this.state.resJson[this.props.number]

    return (
      <YMaps>
        <div>
          <h1>{tour.tourName}:</h1>
        </div>
        <Map
        style={{ height: "350px", width: "100%" }}
        defaultState={{ center: tour.allMarks[1].coors, zoom: 9 }}
        state={{ center: tour.allMarks[1].coors, zoom: 9 }}
        >
          {tour.allMarks.map(el =>
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

            />)}
          <Polyline
            geometry={tour.allLines}
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

export default ProfileOneTour;