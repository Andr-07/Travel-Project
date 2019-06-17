import React, { Component } from "react";
import Slider from "react-slick";
import './center_mode.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pic from './pic.jpg'
import cat from './image.jpg'

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      focusOnSelect: true
    };

    return (
      <div>
        <button>Upload</button>
        <Slider {...settings}>
          <div>
            <img align="middle" width="250" height="200" src={cat} />
          </div>
          <div>
            <img align="middle" width="250" height="200" src={pic} />
          </div>
          <div>
            <img align="middle" width="250" height="200" src={pic} />
          </div>
          <div>
            <img align="middle" width="250" height="200" src={pic} />
          </div>
          <div>
            <img align="middle" width="250" height="200" src={pic} />
          </div>
          <div>
            <img align="middle" width="250" height="200" src={pic} />
          </div>
        </Slider>
      </div>
    );
  }
}