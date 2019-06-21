import React from 'react';
import axios, { post } from 'axios'
import './UploadImage.css'

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
                console.log("The file is successfully uploaded");
            }).catch((error) => {
                console.log("Error");
            });
    }
    onChange(e) {
        this.setState({
            file: e.target.files[0]
        });
    }

    render() {
        return (
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <h4 className="ui dividing header">File upload</h4>
                        <input className="inputfile" type="file" name="myImage" onChange={this.onChange} />
                    <button className="ui button" type="submit">Upload</button>
                </form>
        )
    }
}
