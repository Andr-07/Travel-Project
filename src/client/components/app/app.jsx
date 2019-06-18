import React from "react";

import Menu from '../Main/Menu';
import Login from '../Auth/LogIn';
import OAuth from '../Auth/OAuthButtons';


import Cookies from 'universal-cookie';
import { withCookies } from 'react-cookie';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();

class App extends React.Component {
  state = {
    isLogin: false,
    name: cookies.get('name'),
    redirect : false
  }

  setLogin = async (e) => {
    let userName = e
    // console.log(userName)
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
    this.setState({ redirect: true })
    // console.log(this.state.redirect)
    console.log("--------------------------", cookies)
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Switch>
          <Route exact path='/' component={OAuth} />
          <Route path='/login' render={() => < Login setLogin={this.setLogin} isLogin={this.state.isLogin} />} />
          <Route path='/reg' render={null} />

          <Route render={() => <Menu name = {this.state.name} cookie={cookies} destroyCookies={this.setLogout} />} />
        </Switch>

        {/* <WelcomePage /> */}

      </div>
    );
  }
}
export default withCookies(App);

