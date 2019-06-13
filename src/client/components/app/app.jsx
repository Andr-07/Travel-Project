import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { match } from "minimatch";
import { Redirect } from 'react-router-dom';
import Menu from '../Menu';
import { TestMap } from "../Map";



class App extends React.Component {

  state = {
    question: []

  }

  render() {
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/game'>Component1</Link>
            </li>
          </ul>
          {/* <Route exact path='/' component={} /> */}
          {/* <Route exact path='/game' component={Quiz} /> */}
        </Router>
      <h1 align="center"> Travel</h1>
      <TestMap/>
      
      </div>
    );
  }
}




export default App;