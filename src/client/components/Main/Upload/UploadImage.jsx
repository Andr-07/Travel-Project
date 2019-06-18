import React from 'react';

export default class UploadImage extends React.Component {
    render() {
        return (
            <div className="ui input">
                <input type="text" placeholder="copy your img url here" value={this.state.href} onChange={this.addImage} />
                <button className="ui button">Add image</button>
            </div>
        )
    }
}
