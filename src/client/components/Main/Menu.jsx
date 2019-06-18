import React from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { match } from "minimatch";
import { Redirect } from 'react-router-dom';
import { signOut } from '../../../redux/actions';
import Main from '../Main/Main';
import pic from '../../public/pic.png';
import Profile from '../Main/Profile/profile';
import All from '../Main/AllMaps/AllMaps';
class Menu extends React.Component {

  

  render() {
    // let cok = ookies.get('name')
    // console.log(this.props.name)
    // console.log(this.props.cookie.cookies.name)
   
    return (

      <div className='ui container'>
        <div className="ui stackable menu">
          <div className="item">
            <img src={pic} />
          </div>
          <a className="item">{this.props.name}</a>
          <a className="item"
            onClick={this.props.destroyCookies}>LogOut</a>

          <Link className="item" to='/profile'>Profile</Link>
          <Link className="item" to='/main'>Main</Link>
          <Link className="item" to='/all'>All tours</Link>
       
        </div>
        {/* <Main /> */}
        <Switch>
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/all' component={All} />
        </Switch>

      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect(
  mapStateToProps, { signOut }
)(Menu);


