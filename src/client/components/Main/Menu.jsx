import React from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { match } from "minimatch";
import { Redirect } from 'react-router-dom';
// import { signOut } from '../../../redux/actions';

import pic from '../../public/pic.png';
import Profile from "./Profile/profile";
import Main from './Main';
import Welcome from '../WelcomePage/Welcome';

class Menu extends React.Component {
//   state = {
   
    
//     name: ''
// }

//   componentDidMount(){
//     this.setState ({
//         name: this.props.cookies.cookies.name

//     })
//   }

  render() {
    console.log(this.props.cookies.cookies.name)
    return (
      <div>

        <Router>
          <div className='ui container'>
            <div className="ui stackable menu">
              <div className="item">
                <img src={pic} />
              </div>
              <a className="item">{this.props.cookies.cookies.name}</a>
              <Link className="item" to='/logout' onClick = {this.props.destroyCookies}>LogOut</Link>
         
        
              <Link className="item" to='/profile'>Profile</Link>
              <Link className="item" to='/main'>Main</Link>
              <Link className="item" to='/allmaps'>All Maps</Link>
            </div>
            <Route path='/logout' component={Welcome} />
            <Route path='/profile' component={Profile} />
            <Route path='/main' component={Main} />
          </div>
        </Router>
      </div>

    );
  }
}

// const mapStateToProps = (state) => {
//   return { isSignedIn: state.auth.isSignedIn }
// };

// export default connect(
//   mapStateToProps, { signOut }
// )(Menu);

export default Menu;
