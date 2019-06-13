import React from 'react';

import { YMaps, Map, RouteButton, Placemark } from 'react-yandex-maps';

export class TestMap extends React.Component {
handleClick(event){
console.log(event.get('coords'))
}

    render() {
        return (
//   <YMaps>
//     <div>
//       My awesome application with maps!
//       <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
//             <RouteButton options={{ float: 'right' }} />
      
//       </Map>
//     </div>
//   </YMaps>

<YMaps>
    <div>
<Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} onClick={this.handleClick}>
  <Placemark geometry={[55.684758, 37.738521]} />
</Map>
</div>
</YMaps>
);     
    }
}
