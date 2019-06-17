import React from 'react';
import picmap from '../../../public/map.png';

class MapItem extends React.Component {

    render() {
        return (
            <div className="item">
                <img className="ui avatar image" src={picmap} />
                <div className="content">
                    <a className="header">Creator Name </a>
                    <div className="description">
                        Description of this map
                    </div>
                    <div className=" content">
                        <i className="heart outline icon red "></i>
                            10 Likes
                    </div>
                </div>
            </div>
        );
    }
}



export default MapItem;