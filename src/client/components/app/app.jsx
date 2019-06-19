import React from "react";

import Menu from '../Main/Menu';
import Main from '../Main/Main';
import Login from '../Auth/LogIn';
import OAuth from '../Auth/OAuthButtons';
import Reg from '../Auth/Reg';


import Cookies from 'universal-cookie';
import { withCookies } from 'react-cookie';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { signOut } from '../../../redux/actions';

const cookies = new Cookies();

const userStateforCookie = cookies.get('name');
  


class App extends React.Component {
  state = {
    isSignedInGoogle: null,
    isSignedIn: null,
    name: null,
    redirect: null,
    googlerprofile:null
  }


  googleListen = async () => {
    
    this.auth = window.gapi.auth2.getAuthInstance();
    if (this.state.name !== undefined && this.state.name !== "undefined") {
      await this.setState({ isSignedIn: true })
    } else {
      await this.setState({ isSignedIn: false })
    }
    await this.setState({ isSignedInGoogle: this.auth.isSignedIn.get() });
 
    console.log(this.state)
  }

  async componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '272287560391-a1dv466het12goa2v3hg9uvljmmtflb3.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(this.googleListen());
    })
  }

  onSignedInClick = async () => {
    await this.auth.signIn();
    await this.setState({ redirect: 'main' })
    await this.setState({ googlerprofile: this.auth.currentUser.Ab.w3 })
    cookies.set('name', this.auth.currentUser.Ab.w3.ig, { path: '/' });
    await this.setState({name:cookies.get('name')})
    // console.log(this.auth.currentUser.Ab.w3.i)

    await this.googleListen()
  }

  onSignedOutClick = async () => {
    await this.auth.signOut();
    await this.setState({ redirect: 'login' })
    cookies.remove('name');
    await this.setState({name:undefined})
    console.log("----------------", this.state)

  }

  setLogin = async (e) => {
    let userName = e
    cookies.set('name', userName, { path: '/' });
    console.log(cookies.get('name'));
    this.setState({ redirect: 'main' })
    await this.setState({name:cookies.get('name')})
    console.log('++++++++++++++++', cookies)
  }

  // setLogout = () => {
  //   cookies.remove('name');
  //   this.setState({ redirect: 'logIn'})
  // }

  renderRedirect = () => {
    if (this.state.redirect === 'login') {
      return <Redirect to='/' />
    }
    else if (this.state.redirect === 'main') {
      return <Redirect to='/main' />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Switch>

          <Route exact path='/' render={() => <OAuth check={this.state} setLogin={this.onSignedInClick} setLogOut={this.onSignedOutClick} />} />

          <Route path='/login' render={() => < Login setLogin={this.setLogin} isLogin={this.state.isSignedIn} />} />
          <Route path='/reg' component={Reg} />
          {/* <Route exact path='/main' component={Main} /> */}
          <Route render={() => <Menu stateFromApp={this.state.name}  googlerprofile={this.state.googlerprofile} destroyCookies={this.onSignedOutClick} />} />
        </Switch>
      </div>
    );
  }
}
export default withCookies(App);

