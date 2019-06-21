import React from 'react';
import picmap from '../../../public/daniel.jpg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

let moment = require("moment");


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
            <div>
            <div className="item">
                <img className="ui avatar image" src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg" />
                    <span className="header">{el.userName }</span>
                    <div className="description">
                    <Link to={`/all/${el._id}`}>{el.tourName}</Link>

                    </div>
                            {el.date}
                            <hr></hr>
                </div>
                </div>)}
            </div>
        );
    }
}



export default MapItem;