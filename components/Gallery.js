import React from "react";
import { Row, Col } from "antd";
import "../styles/gallery.css"

const Gallery = ({ thmb1, thmb2, thmb3, thmb4, thmb5 }) => (
  <div className="gallery-section">
    <Row type="flex" justify="end" align="middle">
      <Col
      span={2}
      xl={2}
      xs={2}
      />
      <Col
      span={20}
      xl={20}
      xs={20}
      style={{ display: "flex", justifyContent: "flex-end"}}>
        <div className="insta-follow">
       Síguenos en Instagram
        </div>
      </Col>
      <Col
      span={2}
      xl={2}
      xs={2}
      ></Col>
    </Row>
    <Row type="flex" justify="end" align="middle">
      <Col
      span={2}
      xl={2}
      xs={2}
      ></Col>
      <Col
      span={20}
      xl={20}
      xs={20}
      style={{ display: "flex", justifyContent: "flex-end", fontSize:"1rem" }}>
        <div className="add">
        <a href="https://www.instagram.com/tapetesravari/">@ tapetesravari</a>
        </div>
      </Col>
      <Col
      span={2}
      xl={2}
      xs={2}
      />
    </Row>
    <div className="square-container">
      <div className="square">
        <div className="content">
        <a href="https://www.instagram.com/p/B1y4x0_notO/">
            <img
              src="https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg"
              alt=""
            />
        </a>
        </div>
      </div>

      <div className="square">
        <div className="content spread">
        <a href="https://www.instagram.com/p/B2PIEVonNHj/">
          <img src="https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg"></img>
          </a>
        </div>
      </div>

      <div className="square">
        <div className="content column">
        <a href="https://www.instagram.com/tapetesravari/">
          <img src="https://travari.s3-us-west-2.amazonaws.com/images/derick-mckinney-hX3SLYPe3f0-unsplash.jpg"></img>
          </a>
        </div>
      </div>

      <div className="square">
        <div className="content spread">
        <a href="https://www.instagram.com/tapetesravari/">
          <img src="https://travari.s3-us-west-2.amazonaws.com/images/josh-hemsley-NegT3kIxI_k-unsplash.jpg"></img>
          </a>
        </div>
      </div>

      <div className="square">
        <div className="content column">
        <a href="https://www.instagram.com/tapetesravari/">
          <img src="https://travari.s3-us-west-2.amazonaws.com/images/austin-wehrwein-EZERpkl3Lso-unsplash.jpg"></img>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
