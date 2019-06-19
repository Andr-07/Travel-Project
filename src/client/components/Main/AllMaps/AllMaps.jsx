import React from 'react';
import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';
import { BrowserRouter as Router, Route, Link, Img } from "react-router-dom";



class AllMaps extends React.Component {
  state = {
    arr: []
  }

  async componentDidMount() {
    let response = await fetch('/api/all',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        })
      })
    let jsonRes = await response.json()
    console.log(">>>>>>>>>>>", jsonRes)
    this.setState({
      arr: jsonRes
    })
  }

  render() {
    return (
      <div>
        <h1> Все туры:</h1>
          <div class="ui grid">
        <div class="row">
        {this.state.arr.map(el =>
          <div class="five wide column">

          <div className="ui raised link card">
            <div className="content">
              <div className="header">
              {el.tourName}</div>
              <div class="meta">
                <span className="category">
                {el.description}
                </span>
              </div>
              <div className="description">
                <Link to={`/all/${el._id}`}>Подробнее</Link>
              </div>
            </div>
            <div className="extra content">
              <div className="right floated author">
                <img className="ui avatar image" src={"https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"}/> Author: {el.userName}


              </div>
            </div>
          </div>
          </div>
          
          )}
          </div>
          </div>
          </div>


        /* <h1> Все туры:</h1>
        {this.state.arr.map(el => <ul>
          <h3>{el.tourName} - {el.description}
            <div>
            </div>
          </h3>
          Author: {el.userName}
          <h5> <Link to={`/all/${el._id}`}>Подробнее</Link></h5>

        </ul>)}
        
      </div> */

        );
      }
    }
    
    export default AllMaps;
    
