import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form className="ui form">
                <br></br>
                <div className="field">
                    <label>CREATE YOUR MAP</label>
                    <div className="two fields">
                        <div className="field">
                            <input type="text" placeholder="YOUR NAME" />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="MAP NAME" />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" placeholder="TELL YOUR STORY" />
                </div>
                <button className="ui red button" type="submit">Submit</button>
            </form>
        );
    }
}



export default Form;
