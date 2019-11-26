import React, { Component } from "react";
import { Carousel, Row, Col, Typography, Button } from "antd";
import CarouselOverlay from "./CarouselOverlay"
const { Text, Title } = Typography;
import "../styles/carousel.css";

class Slides extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="carousel-overlay">
       <div className="color-overlay">
        <Row type="flex" justify="center" align="middle">
        <Col
        xs={24}
        // span={18}
        // push={5}
        >
        <div className="main-header">{this.props.line1.toUpperCase()}</div>
        <div className="sub-header">{this.props.line2.toUpperCase()}</div>
        <div className="text-content">{this.props.text}</div>
        <div className="overlay-buttons">
        <Button shape="round" id="brown">
          {this.props.button1.toUpperCase()}
        </Button>
        <Button shape="round" id="black">
          {this.props.button2.toUpperCase()}
        </Button>
        </div>
       
        </Col>
        </Row>
    </div>
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
      </div>
    );
  }
}
export default Slides;
