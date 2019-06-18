import React from 'react';

import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';


class OneTour extends React.Component {

    state = {
        oneTour:[],
        allMarks: [],
        allLines: [],
        center:[]
      }
    
      async componentDidMount() {
        let response = await fetch('/api/idTour',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.match.params.id
            })
          })
        let jsonRes = await response.json()
        console.log(">>>>>>>>>>>", jsonRes)
        console.log(">>>>>>>>>>>", jsonRes.allMarks)
        console.log(">>>>>>>>>>>", jsonRes.allLines)
    
        this.setState({
          oneTour: jsonRes,
          allMarks: jsonRes.allMarks,
            allLines:  jsonRes.allLines,
            center: jsonRes.allMarks[1].coors
        })
      }
    
    render()
    {
        console.log(this.props.match.params.id)
        console.log(this.state.center)
        return (
                        <div>
               <h1>{this.state.oneTour.tourName}</h1>
               <h3>Описание тура:</h3>
               <span>{this.state.oneTour.description}</span>
               <h3>Автор: </h3>
               <span>{this.state.oneTour.userName}</span>
            
            <YMaps>
            <div>
            <h1>{this.state.title}</h1>
            </div>
            <Map style={{ height: "300px", width: "30%" }} defaultState={{ center: this.state.center, zoom: 9 }}>
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

            {/* <div class="ui raised link card">
  <div class="content">
    <div class="header">Cute Dog</div>
    <div class="meta">
      <span class="category">Animals</span>
    </div>
    <div class="description">
      <p></p>
    </div>
  </div>
  <div class="extra content">
    <div class="right floated author">
      <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt></img>
    </div>
  </div>
</div> */}

            </div>


        );
    }
}



export default OneTour;