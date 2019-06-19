import React from 'react';
import axios, { post } from 'axios'
import './UploadImage'

export default class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/api/upload", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }
    onChange(e) {
        this.setState({
            file: e.target.files[0]
        });
    }

    render() {
        return (
            <div className="ui mini form">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <h4 className="ui dividing header">File upload</h4>
                    <div className="field">
                        <input className="inputfile" type="file" name="myImage" onChange={this.onChange} />
                    </div>
                    <button className="ui button" type="submit">Upload</button>
                </form>
            </div>
        )
    }
}
