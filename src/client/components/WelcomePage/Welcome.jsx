import React from 'react';

import Reg from '../WelcomePage/Reg';
import LogIn from '../WelcomePage/LogIn';
import Menu from '../Main/Menu';
import OAuth from './OAuthButtons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class WelcomePage extends React.Component {


  render() {

    return (
      <Router>
        <Route exact path='/' component={OAuth} />
        <Route path='/login' component={LogIn} />
        <Route path='/reg' component={Reg} />
        <Route path='/main' component={Menu} />
      </Router>
    );
  }
}

//  <Link className="item" to='/allmaps'>All Maps</Link>

export default WelcomePage;