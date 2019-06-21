import React from 'react';
import Cookies from 'universal-cookie';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from '../Main/Main';
import pic1 from '../../public/trsvelforest.jpg';
// import pic2 from '../public/mapBiege.jpg';
import Profile from '../Main/Profile/profile';
import OneTour from "../Main/OneTour/OneTour";
import ChatPage from "../Main/Chat/chatPage";
import ProfileOneTour from "../Main/ProfileOneTour/ProfileOneTour";
import All from '../Main/AllMaps/AllMaps';

const cookies = new Cookies();
class Menu extends React.Component {

  render() {
    return (<div className='ui container'>


      <img class="ui segment right floated circular image" style={{ height: '200px' }} src={pic1} />

      <div class="ui pointing menu">


        <Link className="item" to='/profile/0'>Личный кабинет</Link>
        <Link className="item" to='/main'>Главная</Link>
        <Link className="item" to='/all'>Все маршруты</Link>
        <Link className="item" to='/chat'>Форум</Link>

        <div class="right menu">

        <a className="item">
          Приветствую <br></br> {cookies.get('name')}</a>
        <a className="item"
          onClick={this.props.destroyCookies}>LogOut</a>

        </div>

      </div>
      <Switch>
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/chat' component={ChatPage} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/all' component={All} />
        <Route exact path='/all/:id' render={(props) => <OneTour {...props} />} />
        <Route exact path='/oneprofile' render={(props) => <ProfileOneTour {...props} />} />
      </Switch>
    </div>

    );

  }
}


export default Menu;



{/* <div className="ui stackable menu">
    
    <a className="item">{cookies.get('name')}</a>
    
        <a className="item"
        onClick={this.props.destroyCookies}>LogOut</a>

        <Link className="item" to='/profile/0'>Profile</Link>
        <Link className="item" to='/main'>Main</Link>
        <Link className="item" to='/all'>All tours</Link>
        
        </div>
        <div class="ui segment">
        <div className="ui small circular right floated image">
        <img src={pic1} />
        </div>
      </div> */}

      // <div className='ui container'>