import React from "react";

import Menu from '../Menu';

import MapCreator from '../MapCreator/MapCreator';
import MapList from '../MapList/MapList';

import { TestMap } from "../Map";
import MapLine from '../MapLines/MapLine'




class App extends React.Component {

  render() {
    return (

      <div className='ui container'>
        <Menu />
        <div className="ui grid">
          <div className="ui row">
            <div className='eleven wide column'>
              <MapCreator/>
            </div>
            <div className = 'four wide column'>
              <MapList />
            </div>
          </div>
          {/* <TestMap/> */}
          {/* <MapLine /> */}
        </div>
      </div>
    );
  }
}




export default App;