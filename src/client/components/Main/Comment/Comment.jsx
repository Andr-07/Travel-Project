import React from 'react';


import Cookies from 'universal-cookie';
import { YMaps, Map, RouteButton, Placemark, Button, Polyline } from 'react-yandex-maps';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const cookies = new Cookies();

class Comment extends React.Component {
    state = {
        fullArr: [],
        userName: '',
        date: '',
        comment: ''
    }

    componentDidMount() {
       this.showComments();

    }

    deleteComment = async (id) => {
        let response = await fetch('/api/delcomment',
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idComment: id,
                    idPost: this.props.idPost

                })
            })
        let jsonRes = await response.json()
        this.setState({
            fullArr: jsonRes
        })
    }

    showComments = async () => {

        let response = await fetch('/api/getcomments',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idPost: this.props.idPost
                })
            })
        let jsonRes = await response.json()
        this.setState({
            fullArr: jsonRes
        })
        setTimeout(this.showComments, 3000);
    }


    render() {

        return (
            <div>
                {this.state.fullArr.map(el =>
                    <div class="comment">
                        <a class="avatar">
                            <img src={"https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"} />
                        </a>

                        <a class="author">{el.userName}  </a> 
                        {el.userName == cookies.get("name") ? 
                        <i onClick={()=>this.deleteComment(el._id)} class="x red icon"></i>
                        : <i></i>}
                        <div class="metadata">
                            <span class="date">{el.date}</span>
                        </div>
                        <div class="text">
                            {el.comment}
                        </div>
                        <div class="actions">
                            <a class="reply">Reply</a>
                        </div>

                    </div>
                )}

            </div>
        )
    }
}

export default Comment;

