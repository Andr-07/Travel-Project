import React from "react";

// import Menu from '../Main/Menu';

import MapCreator from '../Main/MapCreator/MapCreator';
import MapList from '../Main/MapList/MapList';

class Main extends React.Component {
  render() {
    return (
 
      <div className="ui grid"> 
           <div className="ui row"> 
             <div className='eleven wide column'> 
              <MapCreator />
             </div> 
            <div className='four wide column'> 
              <MapList />
             </div>
          </div> 
        </div>
       
      
    );
  }
}

export default Main;