import React from 'react';
import GoogleAuth from '../GoogleAuth';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends React.Component {


  render() {
    return (
      <div >
   <img className="ui medium circular image" src="../../../public/pic"/>
 <GoogleAuth/>
 <div class="ui buttons">
                <button class="ui button">Reg</button>
                <div class="or"></div>
                <button class="ui google plus button">
                    <i class="google plus icon"></i>
                    Google Plus
</button>
<div class="or"></div>
<button class="ui button">LogIn</button>
                </div>
       </div>
    );
  }
}



export default Menu;