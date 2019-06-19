import React from 'react';
import picmap from '../../../public/map.png';

class MapItem extends React.Component {

    state = {
        arr: []
      }
    
      async componentDidMount() {
        let response = await fetch('/api/top',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            })
          })
        let jsonRes = await response.json()
        console.log(">>>>>>>>>>>", jsonRes[0])
        this.setState({
          arr: jsonRes
        })
      }

    render() {
        return (
            <div>
            {this.state.arr.map(el =>
            <div className="item">
                <img className="ui avatar image" src={picmap} />
                    <a className="header">{el.userName }</a>
                    <div className="description">
                        {el.tourName}
                    </div>
                        <i className="heart outline icon red "></i>
                            10 Likes
                </div>)}
            </div>
        );
    }
}



export default MapItem;