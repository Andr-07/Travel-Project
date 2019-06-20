import React from 'react';


import Cookies from 'universal-cookie';
import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


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
    redirect: false

  }

  deleteTour = async (id) => {
    console.log(id)
    let response = await fetch('/api/deleteMap',
    {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          userName: cookies.get('name'),
        })
      })
      let jsonRes = await response.json()
      this.setState({resJson: jsonRes});

      this.props.createLinks(this.state.resJson.length)

      alert('Вы успешно удалили маршрут')
      this.setState({
        redirect: true
      })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/profile/0' />
    }
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

        this.props.createLinks(this.state.resJson.length)
  }

  render() {
    if (!this.state.resJson) {
      return <div>Loading...</div>
    }

    const tour = this.state.resJson[this.props.number]
    // console.log('ididididididd', tour._id)

    return (
      <div>
                {this.renderRedirect()}

      {tour ? (
<div>
      <YMaps>
        <div>
          <h1>{tour.tourName}:</h1>
          <hr></hr>
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
              strokeColor: '#0000FF',
              strokeWidth: 4,
              strokeOpacity: 0.5,
              strokeStyle: 'dot'
              // strokeColor: '#DC143C',
              // strokeWidth: 3,
              // strokeOpacity: 0.5,
            }}
          />

        </Map>
      </YMaps>
      <h4>Описание: {tour.description}</h4>
      <hr></hr>
      <button class="negative ui button" onClick={()=>this.deleteTour(tour._id)}>Delete</button> 
      </div>) : (<h2>Пока маршрутов нет, но вы можете создать их <Link to={`/main`}>здесь</Link></h2>)}
      </div>
    )
  }

}

export default ProfileOneTour;