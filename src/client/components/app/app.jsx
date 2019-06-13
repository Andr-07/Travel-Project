import React from "react";

import Menu from '../Menu';
import MapList from '../MapList/MapList';
import MapCreator from '../MapCreator/MapCreator';

class App extends React.Component {

  render() {
    return (
      <div className='ui container'>
        <Menu />
        <div className="ui grid">
          <div className="ui row">
            <div className='eleven wide column'>
              <MapCreator/>
            <div className = 'five wide column'>
              <MapList />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default App;