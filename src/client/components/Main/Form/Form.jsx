import React from 'react';

class Form extends React.Component {
    state = {
        userName: '',
        mapName: '',
        description: ''
    }

    onChangeFunc = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    funcOnButton = (e) => {
        e.preventDefault();
        this.props.handleInputChange(this.state);
        this.setState({
            userName: '',
            mapName: '',
            description: ''
        })
    }



    render() {
        return (
            <form class="ui form"
                onSubmit={this.funcOnButton}
                onChange={this.onChangeFunc}
            >

                <br></br>
                <div class="field"
               
                >
                    <label>CREATE YOUR MAP</label>
                    <div class="two fields">
                        <div class="field">
                            <input type="text" placeholder="YOUR NAME" name='userName' value={this.state.userName} />
                        </div>
                        <div class="field">
                            <input type="text" placeholder="MAP NAME" name='mapName' value={this.state.mapName} />
                        </div>
                    </div>
                </div>
                <div class="field"  >
                    <label>Description</label>
                    <input type="text" placeholder="TELL YOUR STORY" name='description' value={this.state.description} />
                </div>
                <button class="ui red button" type="submit"

                >Submit</button>
            </form>
        );
    }
}



export default Form;
