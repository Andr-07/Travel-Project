import React, { Component } from "react";
import Slider from "react-slick";
import './center_mode.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = require.context('../../../../../public/uploads', true, /\.(png|jpe?g|svg)$/);

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

    let newImg = '';

    return (
      <div className='slider' >
        <Slider {...settings}>
          {
            images.keys().map(element => {
              newImg = images(element)
              return (
                <div key={element} className="items">
                  <img className="imageContainer" align="middle" layout="fill"/*width="180" height="200"*/ src={newImg} />
                </div>
              )
            })
          }
        </Slider>
      </div>
    );
  }
}