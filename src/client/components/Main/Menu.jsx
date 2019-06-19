import React from 'react';
import Cookies from 'universal-cookie';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { match } from "minimatch";


import Main from '../Main/Main';
import pic from '../../public/pic.png';
import Profile from '../Main/Profile/profile';
import OneTour from "../Main/OneTour/OneTour";
import ProfileOneTour from "../Main/ProfileOneTour/ProfileOneTour";
import All from '../Main/AllMaps/AllMaps';

const cookies = new Cookies();
class Menu extends React.Component {

  render() {
    // console.log(cookies.get('name'))
    // console.log(this.props.stateFromApp)
    // if (this.props.check.isSignedIn === true) {
      return (
        <div className='ui container'>
          <div className="ui stackable menu">
            <div className="item">
              {/* <img src = {`${this.props.googlerprofile.Paa}`}/> */}
              <img src={pic} />
            </div>
            <a className="item">{cookies.get('name')}</a>

            <a className="item"
              onClick={this.props.destroyCookies}>LogOut</a>

            <Link className="item" to='/profile/0'>Profile</Link>
            <Link className="item" to='/main'>Main</Link>
            <Link className="item" to='/all'>All tours</Link>

          </div>

          {/* <a className="item">{this.props.name}</a>
          <a className="item"
            onClick={this.props.destroyCookies}>LogOut</a>

          <Link className="item" to='/profile/0'>Profile</Link>
          <Link className="item" to='/main'>Main</Link>
          <Link className="item" to='/all'>All tours</Link> */}
       
        
        <Switch>
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/all' component={All} />
        <Route exact path='/all/:id' render={(props) => <OneTour {...props} />}/>
        <Route exact path='/oneprofile' render={(props) => <ProfileOneTour {...props} />}/>
        </Switch>
        </div>



      );
    // } else return <div>oi ei ei</div>

  }
}


export default Menu;

// const mapStateToProps = (state) => {
//   return {isSignedIn: state.isSignedIn}
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSignedOutClick: () => dispatch(signOut())

//   }
// };

// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(Menu);

