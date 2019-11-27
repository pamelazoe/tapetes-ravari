import React, { Component } from "react";
import { Carousel, Row, Col, Typography, Button } from "antd";
import "../styles/carousel.css";

class Slides extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="carousel-overlay">
        <div className="color-overlay">
          <Row
            className="overlay-content"
            type="flex"
            justify="center"
            align="middle"
          >
            <Col xs={0} md={0} gd={0} xl={1} />
            <Col
              xs={24}
              md={24}
              gd={24}
              xl={22}
            >
              <div className="main-header">
                {this.props.line1.toUpperCase()}
              </div>
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
            <Col xs={0} md={0} gd={0} xl={1} />
          </Row>
        </div>
        <div className="carousel">
          <Carousel
            autoplay="false"
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
            </div>
            <div className="second">
              <div className="second-container" />
            </div>
            <div className="third">
              <div className="third-container" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Slides;
