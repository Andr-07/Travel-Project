import React from "react";
import WelcomePage from '../WelcomePage/Welcome';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={WelcomePage} />
        </Router>
      </div>
    );
  }
}
export default App;

