import React from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { match } from "minimatch";
import { Redirect } from 'react-router-dom';
import { signOut } from '../../../redux/actions';
import Main from '../Main/Main';
import pic from '../../public/pic.png';

class Menu extends React.Component {

  renderRedirect = () => {
    if (this.props.redirect) {
      return <Redirect to='/login' />
    }
  }



  render() {
    console.log(this.props.cookies.cookies.name)
    // console.log(this.props.destroyCookies.redirect)
    return (

      <div className='ui container'>
        <div className="ui stackable menu">
          <div className="item">
            <img src={pic} />
          </div>
          <a className="item">{this.props.cookies.cookies.name}</a>
          <a className="item"
            onClick={this.props.destroyCookies}>LogOut</a>

          <Link className="item" to='/profile'>Profile</Link>
          <Link className="item" to='/main'>Main</Link>
          <Link className="item" to='/all'>All tours</Link>
          {/* {this.renderRedirect()} */}
        </div>
        <Main />
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


