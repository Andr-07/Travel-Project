import React from 'react';
import picmap from '../../../public/map.png';

class MapItem extends React.Component {

    render() {
        return (
            <div class="item">
                <img class="ui avatar image" src={picmap} />
                <div class="content">
                    <a class="header">Creator Name </a>
                    <div class="description">
                        Description of this map
                    </div>
                    <div class=" content">
                        <i class="heart outline icon red "></i>
                            10 Likes
                    </div>
                </div>
            </div>
        );
    }
}



export default MapItem;