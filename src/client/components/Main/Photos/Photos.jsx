import React from 'react';
import CenterMode from '../CenterMode/CenterMode';
import UploadImage from '../Upload/UploadImage';

export default class Photos extends React.Component {
    render(){
        return (
            <div>
                <CenterMode/>
                <UploadImage/>
            </div>
        )
    }
}