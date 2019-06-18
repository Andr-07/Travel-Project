import React, { Component } from "react";
import Slider from "react-slick";
import './center_mode.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from './pic.jpg'
import cat from './image.jpg'
// import images from '../../../../../public/uploads/newName-1560869575062.jpg'
const images = require.context('../../../../../public/uploads', true);

images.keys().forEach(element => {
  console.log(images(element))
});





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
      <div className='slider' >
        <Slider {...settings}>
            <div className="items">
              <img align="middle" width="180" height="200" src={images} />
            </div>
            <div className="items">
              <img align="middle" width="180" height="200" src={cat} />
            </div>
            <div className="items">
              <img align="middle" width="180" height="200" src={cat} />
            </div>
            <div className="items">
              <img align="middle" width="180" height="200" src={cat} />
            </div>
        </Slider>
      </div>
    );
  }
}