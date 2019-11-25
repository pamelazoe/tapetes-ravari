import React, { Component } from "react";
import { Carousel } from "antd";
import "../styles/carousel.css";

class Slides extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="carousel">
        <Carousel
          autoplay="true"
          effect="fade"
          infinite="true"
          speed="2000"
          slidesToShow="1"
          slidesToScroll="1"
          accessibility="true"
          draggable="true"
        >
          <div className="first">
            <div className="first-container" />
            {/* <img src={this.props.img1} alt=""/> */}
          </div>
          <div className="second">
            {/* <img src={this.props.img2} alt=""/> */}
            <div className="second-container" />
          </div>
          <div className="third">
            {/* <img src={this.props.img3} alt=""/> */}
            <div className="third-container" />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Slides;
