import React from 'react';
import MapItem from '../MapItem/MapItem';

class MapList extends React.Component {

    render() {
        return (
            <div className="ui relaxed devided list">
                <MapItem />
                <MapItem />
                <MapItem />
                <MapItem />
                <MapItem />
                <MapItem />
            </div>

        );
    }
}



export default MapList;