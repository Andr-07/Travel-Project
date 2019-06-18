import React, { Component } from "react";
import Slider from "react-slick";
import './center_mode.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from './pic.jpg'
import cat from './image.jpg'
// import UploadImage from '../Upload/UploadImage'

class UploadImage extends Component {
  render() {
    return (
      <div className="ui input">
        <input type="text" placeholder="copy your img url here" value={this.state.href} onChange={this.addImage} />
        <button className="ui button">Add image</button>
      </div>
    )
  }
}

export default class CenterMode extends Component {
  constructor() {
    super()
    this.state = {
      href: []
    }
    this.addImage = this.addImage.bind(this)
  }


  addImage = (e) => {
    let href1 = e.target.value
    console.log(this.state);
    this.setState(prevState => {
      return {
        href: [...prevState.href, href1]
      }
    })
  }
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
      <div className='slider' >
        <Slider {...settings}>
          <div className="items">
            <img align="middle" width="180" height="200" src={cat} />
          </div>
          <div className="items">
            <img align="middle" width="230" height="200" src={pic} />
          </div>
          <div className="items">
            <img align="middle" width="230" height="200" src={pic} />
          </div>
          <div className="items">
            <img align="middle" width="230" height="200" src={pic} />
          </div>
          <div className="items">
            <img align="middle" width="230" height="200" src={pic} />
          </div>
          <div className="items">
            <img align="middle" width="230" height="200" src={pic} />
          </div>
        </Slider>
        <UploadImage />
      </div>
    );
  }
}