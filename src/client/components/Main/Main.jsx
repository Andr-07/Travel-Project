import React from "react";

// import Menu from '../Main/Menu';

import MapCreator from '../Main/MapCreator/MapCreator';
import MapList from '../Main/MapList/MapList';

class Main extends React.Component {
  render() {
    return (


      <div className="ui grid">

        <div class="four wide column">
          <MapList />
        </div>
        
        <div class="twelve wide column">
          <MapCreator />
        </div>

      </div>
    );
  }
}

export default Main;