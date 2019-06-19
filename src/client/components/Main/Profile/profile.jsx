import React from 'react';


import ProfileOneTour from '../ProfileOneTour/ProfileOneTour';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import Cookies from 'universal-cookie';

const cookies = new Cookies();

import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';


class Profile extends React.Component {
  state = {
    title: '',
    tourName: '',
    allMarks: [],
    allLines: [],
    center: [],
    numberOfMaps: null,
    listNum:[]
  }

//   createLinks = () => {
//     let a;
//     for (let i = 0; i < 3; i++) {
//       a += <Link className="item" to={`/profile/${i}`}>{i+1}</Link>
//   }
//   return a;
// }

  createLinks = (number) => {
    this.setState({numberOfMaps:number})
    console.log('kolvo',this.state.numberOfMaps)
    let listNum = [];
    for (let i = 0; i < this.state.numberOfMaps; i++) {
    listNum.push(i);
}
this.setState({listNum})
console.log(this.state.listNum)

  }

  render() {

    console.log('ddededdeddeddedde', cookies.get('name'))
    console.log(this.props.match.params.id)
    console.log(this)
    return (


      <div class="ui grid">
        <div class="row">
          <div class="five wide column">
            <div class="ui card">
              <div class="image"><img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
              </div>
              <div class="content">
                <a class="header">{cookies.get('name')}</a>
                <div class="meta">
                  <span class="date">Joined in 2019</span>
                </div>
                <div class="description">
                  {cookies.get('name')} is an art director living in New York.
    </div>
              </div>
              <div class="extra content">
                <a>
                  <i class="user icon"></i>
                  22 Friends
    </a>
              </div>
            </div>

          </div>

          <div class="eleven wide column">

            <ProfileOneTour number={this.props.match.params.id} createLinks={this.createLinks} />


            <div class="ui borderless menu">
             {this.state.listNum.map(el=> <Link className="item" to={`/profile/${el}`}>{el+1}</Link>
)}
              {/* {this.createLinks()} */}

              {/* <Link className="item" to='/profile/0'>1</Link>
              <Link className="item" to='/profile/1'>2</Link>
              <a class="item">3</a>
              <a class="item">4</a>
              <a class="item">5</a>
              <a class="item">6</a> */}
            </div>


          </div>
        </div>


      </div>

    )

  }
}



export default Profile;