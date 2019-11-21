import React from "react";
import { Row, Col } from "antd";

const Gallery = ({ thmb1, thmb2, thmb3, thmb4, thmb5 }) => (
  <div className="gallery-section">
    <Row type="flex" justify="end" align="middle">
      <Col span={2}></Col>
      <Col span={20} style={{ display: "flex", justifyContent: "flex-end"}}>
        <h1>Síguenos en Instagram</h1>
      </Col>
      <Col span={2}></Col>
    </Row>
    <Row type="flex" justify="end" align="middle">
      <Col span={2}></Col>
      <Col span={20} style={{ display: "flex", justifyContent: "flex-end", fontSize:"1rem" }}>
        <a href="https://www.instagram.com/tapetesravari/">@ tapetesravari</a>
      </Col>
      <Col span={2}></Col>
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
    <style jsx>{`
      .square-container {
        display: flex;
        flex-wrap: wrap;
      }

      .square {
        position: relative;
        flex-basis: calc(20% - 0px);
        overflow: hidden;
      }

      .square::before {
        content: "";
        display: block;
        padding-top: 100%;
      }

      .square .content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display:flex;
      }
      .square .content img {
        width: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .gallery-section {
        margin-top:8rem;
      }
      a:link, a:visited, a:hover, a:active {
        text-decoration: none;
        color:#7e764f;
      }
      // .square .content a::after {
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   right: 0;
      //   bottom: 0;
      //   content:url(https://travari.s3-us-west-2.amazonaws.com/images/insta30x30-04.png);
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   color: white;
      //   font: 2.5em cursive;
      //   opacity: 0;
      //   transition: opacity .5s;
        
      // }
      // .square .content:hover::before{
      //   display:block;
      // }
      // .square .content:hover {
      //   -webkit-filter: brightness(60%);
      // }
      .square .content a {
        width: 100%;
        display: inline-block;
        position: relative;
      }
      
      .square a:after {
        position: absolute;
        top: -15px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        content:url(https://travari.s3-us-west-2.amazonaws.com/images/insta30x30-04.png);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        opacity: 0;
        transition: opacity .5s;
      }
      
      .square .content a:hover:after {
        opacity: 1;
      }
      
      .square .content img {
        max-width: 100%;
        vertical-align: top;
      }
      
    `}</style>
  </div>
);

export default Gallery;
