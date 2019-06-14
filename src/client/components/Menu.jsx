import React from 'react';
import MapItem from './MapItem/MapItem';
import pic from '../public/pic.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { match } from "minimatch";
import { Redirect } from 'react-router-dom';


class Menu extends React.Component {


  render() {
    return (
      <div className="ui stackable menu">
         <div className="item">
          <img src={pic} />
        </div>
    <Router>
        <a className="item active"><Link to='/reg'>Sign In</Link></a> 
        <a className="item"> <Link to='/'>Home</Link></a>
        <a className="item"><Link to='/society'>Society</Link></a>
        <a className="item"><Link to='/mapofuser'>Map of user</Link></a>
    </Router> 
 
 <Route exact path='/society' component={{MapItem}} />
       </div>
    );
  }
}



export default Menu;

