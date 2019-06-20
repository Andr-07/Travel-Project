import React from 'react';

import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';
import {  Link } from "react-router-dom";

class OneTour extends React.Component {

  state = {
    oneTour: [],
    allMarks: [],
    allLines: [],
    center: []
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
      allLines: jsonRes.allLines,
      center: jsonRes.allMarks[1].coors
    })
  }

  render() {
    console.log(this.props.match.params.id)
    console.log(this.state.center)
    return (
      <div>
        {/* <div class="ui internally celled grid">
  <div class="row">
    <div class="three wide column">
      hh
    </div>
    <div class="ten wide column">
      <p></p>
    </div>
    <div class="three wide column">
      hh
    </div>
  </div>
  <div class="row">
    <div class="three wide column">
      hhh
    </div>
    <div class="ten wide column">
      <p></p>
    </div>
    <div class="three wide column">
      hh
    </div>
    </div>
  </div> */}
        <div class="ui grid">
          <div class="row">
            <div class="eleven wide column">
              <div class="ui blue segment">

              
               {/* <Link className="ui right floated button" to={`/chat/${this.state.oneTour.userName}`}><i className="envelope icon"></i>Send message</Link> */}
                <h1>{this.state.oneTour.tourName}</h1>
              </div>
              <div class="ui center aligned segment">

                <YMaps>
                  <div>
                    <h1>{this.state.title}</h1>
                  </div>
                  <Map style={{ height: "400px", width: "100%" }} defaultState={{ center: this.state.center, zoom: 9 }}>
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

                      />)}
                    <Polyline
                      geometry={[...this.state.allLines]}
                      options={{
                        balloonCloseButton: false,
                        strokeColor: '#0000FF',
                        strokeWidth: 4,
                        strokeOpacity: 0.5,
                        strokeStyle: 'dot'
                      }}
                    />

                  </Map>
                </YMaps>
              </div>
              <div class="ui grid">
                <div class="row">
                  <div class="twelve wide column">
                    <h3>Описание тура:</h3>
                    <span>{this.state.oneTour.description}</span>
                  </div>
                  <div class="four wide column">
                    <h3>Автор: </h3>
                    <span>{this.state.oneTour.userName}</span>
                  </div>
                </div>
              </div>

            </div>
            <div class="five wide column">
              <div class="ui comments">
                <h3 class="ui dividing header">Комментарии:</h3>
                <div class="comment">
                  <a class="avatar">
                    <img src={"https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"} />
                  </a>
                  <div class="content">
                    <a class="author">Matt</a>
                    <div class="metadata">
                      <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">
                      How artistic!
      </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <div class="comment">
                  <a class="avatar">
                    <img src={"https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"} />
                  </a>
                  <div class="content">
                    <a class="author">Elliot Fu</a>
                    <div class="metadata">
                      <span class="date">Yesterday at 12:30AM</span>
                    </div>
                    <div class="text">
                      <p>This has been very useful for my research. Thanks as well!</p>
                    </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <div class="comment">
                  <a class="avatar">
                    <img src={"https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"} />
                  </a>
                  <div class="content">
                    <a class="author">Joe Henderson</a>
                    <div class="metadata">
                      <span class="date">5 days ago</span>
                    </div>
                    <div class="text">
                      Dude, this is awesome. Thanks so much
      </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <form class="ui reply form">
                  <div class="field">
                    <textarea></textarea>
                  </div>
                  <div class="ui blue labeled submit icon button">
                    <i class="icon edit"></i> Add Reply
    </div>
                </form>
              </div>
            </div>
          </div>
        </div>





      </div>


    );
  }
}



export default OneTour;