import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class ChatPage extends React.Component {

    state = {
        sender: cookies.get('name'),
        message: '',
        arrMessages: []
        
    }

    componentDidMount() {
        this.showMessage()
    }

    sendMessage = async () => {
        this.setState({message:''})
        let response = await fetch('/api/sendMessage',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sender: this.state.sender,
                    message: this.state.message
                })
            })
        // console.log(response)
        let whatIGet = await response.json()
        // console.log(whatIGet)

    }

    showMessage = async () => {
        let response = await fetch('/api/showMessage',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sender: this.state.sender,
                    reciever: this.state.reciever
                })
            })
        let whatIGet = await response.json()
console.log(whatIGet)
        this.setState({ arrMessages: whatIGet })
        setTimeout(this.showMessage, 1000)
    }

    render() {

        return (
            <div className="ui grid">
                <div class="sixteen wide column">
            <h1><i class="star outline icon"></i>
Общий форум</h1>
                    <div class="ui center aligned segment">
                        {this.state.arrMessages.map(el => {
                           
                            if (el.sender === this.state.sender ) {
                                return (
                                    <div style={{textAlign:"right"}}class="ui yellow segment" >
                                       
                                        From: {el.sender} <br></br>
                                        Message: {el.messages}
                                    </div>)
                            }
                            else  return(
                                <div style={{textAlign:"left"}} class="ui blue segment" >
                                            From: {el.sender} <br></br>
                                            Message: {el.messages}
                                        </div>)
                            

                        })}
                    </div>
                </div>
                <div class="sixteen wide row">
                    <div class="ui yellow segment">
                        <div class="ui massive icon input focus">
                            <div class="ui compact menu">
                                
                            </div>

                            <textarea type="text" placeholder="Написать.."
                                onChange={(event) => this.setState({ message: event.target.value })} />
                        </div>
                        <br></br>
                        <br></br>
                        <button class="ui yellow basic button" onClick={this.sendMessage}><i class="icon envelope" />Send</button>
                    </div>
                </div>
            </div>
        );

    }
}


export default ChatPage;