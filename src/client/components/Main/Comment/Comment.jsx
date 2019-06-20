import React from 'react';


import Cookies from 'universal-cookie';
import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const cookies = new Cookies();

class Comment extends React.Component {
    state = {
        userName:'',
        date:'',
        comment:''
    }

    async componentDidMount() {
    
        let response = await fetch('/api/comment',
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userName: cookies.get('name'),
              date: Date(),
              comment: "Amazing tour"
            })
          })
          let jsonRes = await response.json()
      }
    

    render() {
        return (
            <div>
                <div class="comment">
                    <a class="avatar">
                        <img src={"https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"} />
                    </a>
                    <div class="content">
                        <a class="author">Matt</a>
                        <div class="metadata">
                            <span class="date">Today at 5:42PM</span>
                        </div>
                        <div class="text">
                            How artistic!
      </div>
                        <div class="actions">
                            <a class="reply">Reply</a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

