
import React from "react";

import {
  YMaps,
  Map,
  RouteButton,
  Placemark,
  Button,
  Polyline
} from "react-yandex-maps";
import Comment from "../Comment/Comment";
import Cookies from "universal-cookie";

const cookies = new Cookies();
let moment = require("moment");

import {  Link } from "react-router-dom";


class OneTour extends React.Component {
  state = {
    oneTour: [],
    allMarks: [],
    allLines: [],
    center: [],
    comment: null
  };

  onChangeComment = e => {
    this.setState({
      comment: e.target.value
    });
    console.log(this.state.comment);
  };

  saveComment = async () => {
    console.log('SAVE');
    
    let response = await fetch("/api/savecomment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userName: cookies.get("name"),
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        comment: this.state.comment,
        idPost: this.props.match.params.id
      })
    });
    
    console.log("setstate:", this.state.comment);
    let jsonRes = await response.json();
          this.setState({
            comment: ""
          });
  };

  async componentDidMount() {
    let response = await fetch("/api/idTour", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.props.match.params.id
      })
    });
    let jsonRes = await response.json();
    console.log(">>>>>>>>>>>", jsonRes);
    console.log(">>>>>>>>>>>", jsonRes.allMarks);
    console.log(">>>>>>>>>>>", jsonRes.allLines);

    this.setState({
      oneTour: jsonRes,
      allMarks: jsonRes.allMarks,
      allLines: jsonRes.allLines,
      center: jsonRes.allMarks[1].coors
    });
  }

  render() {
    console.log(this.props.match.params.id);
    console.log(this.state.center);
    return (
      <div>
        <div class="ui grid">
          <div class="row">
            <div class="eleven wide column">
              <div class="ui blue segment">

                <h1>{this.state.oneTour.tourName}</h1>
              </div>
              <div class="ui center aligned segment">
                <YMaps>
                  <div>
                    <h1>{this.state.title}</h1>
                  </div>
                  <Map
                    style={{ height: "400px", width: "100%" }}
                    defaultState={{ center: this.state.center, zoom: 9 }}
                  >
                    {this.state.allMarks.map(el => (
                      <Placemark
                        geometry={el.coors}
                        properties={{
                          balloonContentHeader: `Пункт№ ${el.i} - ${
                            el.balloonInput
                          }`
                        }}
                        options={{
                          iconLayout: "default#image",
                          iconImageHref: `https://img.icons8.com/color/48/000000/${
                            el.i
                          }-circle.png`
                        }}
                        modules={[
                          "geoObject.addon.balloon",
                          "geoObject.addon.hint",
                          "geoObject.addon.editor"
                        ]}
                      />
                    ))}
                    <Polyline
                      geometry={[...this.state.allLines]}
                      options={{
                        balloonCloseButton: false,
                        strokeColor: "#0000FF",
                        strokeWidth: 4,
                        strokeOpacity: 0.5,
                        strokeStyle: "dot"
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
                <Comment idPost={this.props.match.params.id} />

                <form class="ui reply form">
                  <div class="field">
                    <textarea
                      onChange={this.onChangeComment}
                      value={this.state.comment}
                    />
                  </div>
                  <div
                    onClick={this.saveComment}
                    class="ui blue labeled submit icon button"
                  >
                    <i class="icon edit" /> Оставить комментарий
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
