import React from 'react';

import Reg from '../WelcomePage/Reg';
import LogIn from '../WelcomePage/LogIn';
import Menu from '../Main/Menu';
import OAuth from './OAuthButtons';
import Cookies from 'universal-cookie';
import { withCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const cookies = new Cookies();

class WelcomePage extends React.Component {
state = {
  isLogin: false,
  name: ''
}

setLogin = async (e) => {
  let userName = e
  console.log(userName)
  cookies.set('name', userName ,{path:'/'});
  console.log(cookies.get('name'));

  this.setState ({
    isLogin:true
  });

  console.log('++++++++++++++++',cookies)
}

setLogout = () => { 
    this.setState ({
      isLogin:false
    })
    cookies.remove('name');

    console.log("--------------------------", cookies )
  }

  render() {

    return (
      <Router>
        <Route exact path='/' component={OAuth} />
        <Route path='/login' render = {()=> <LogIn setLogin={this.setLogin} isLogin={this.state.isLogin} />}/>
        <Route path='/reg' component={Reg} />
        <Route exact path='/main' render = {()=> <Menu cookies={this.props.cookies} destroyCookies = {this.setLogout}/>} />
      </Router>
    );
  }
}

//  <Link className="item" to='/allmaps'>All Maps</Link>

export default withCookies(WelcomePage);