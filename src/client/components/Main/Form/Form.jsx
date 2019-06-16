import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form class="ui form">
                <br></br>
                <div class="field">
                    <label>CREATE YOUR MAP</label>
                    <div class="two fields">
                        <div class="field">
                            <input type="text" placeholder="YOUR NAME" />
                        </div>
                        <div class="field">
                            <input type="text" placeholder="MAP NAME" />
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label>Description</label>
                    <input type="text" placeholder="TELL YOUR STORY" />
                </div>
                <button class="ui red button" type="submit">Submit</button>
            </form>
        );
    }
}



export default Form;
