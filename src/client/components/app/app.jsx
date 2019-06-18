import React from "react";
import WelcomePage from '../WelcomePage/Welcome';
import Menu from '../Main/Menu';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={null} />
          <Route path='/login' render={null} />
          <Route path='/reg' render={null} />
          {/* <Route component={Menu} /> */}
        </Switch>

        <WelcomePage />

      </div>
    );
  }
}
export default App;

