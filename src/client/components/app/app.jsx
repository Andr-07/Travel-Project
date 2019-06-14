import React from "react";
import Menu from '../Main/Menu';
import Welcome from '../WelcomePage/Welcome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div> 
<Router>
  <Route exact path='/'  component={Welcome} />
  <Route  exact path='/main'  component={Menu} />
</Router>
      </div>
    );
  }
}
export default App;

