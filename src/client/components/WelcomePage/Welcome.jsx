import React from 'react';

import Reg from '../WelcomePage/Reg';
import LogIn from '../WelcomePage/LogIn';
import Menu from '../Main/Menu';
import OAuth from './OAuthButtons';
import Cookies from 'universal-cookie';
import Profile from "../Main/Profile/profile";
import AllMaps from "../Main/AllMaps/AllMaps";
import { withCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const cookies = new Cookies();

class WelcomePage extends React.Component {
  state = {
    isLogin: false,
    name: ''
  }

  setLogin = async (e) => {
    let userName = e
    console.log(userName)
    cookies.set('name', userName, { path: '/' });
    console.log(cookies.get('name'));

    this.setState({
      isLogin: true
    });

    console.log('++++++++++++++++', cookies)
  }

  setLogout = () => {
    this.setState({
      isLogin: false
    })
    cookies.remove('name');
    // this.setState({ redirect: true })
    console.log("--------------------------", cookies)
  }

  render() {
    console.log(1)
    return (
      <Switch>
        <Route exact path='/' component={OAuth} />
        <Route path='/login' render={() => <LogIn setLogin={this.setLogin} isLogin={this.state.isLogin} />} />
        <Route path='/reg' component={Reg} />
        <Route path='/main' render={(props) => <Menu {...props} cookies={this.props.cookies} destroyCookies={this.setLogout} />} /> 
        <Route path='/profile' component={Profile} />
        <Route path='/all' component={AllMaps} />
        <Route component={OAuth} />
      </Switch>
    );
  }
}

export default withCookies(WelcomePage);