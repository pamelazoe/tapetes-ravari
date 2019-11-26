import React from "react";
import { Col, Row, Typography, Button } from "antd";
const { Title } = Typography;
import "../styles/about.css";

const AboutSection = ({ title, subtitle, text1, text2, text3 }) => (
  <div className="about">
    <Row
      className="about-header"
      type="flex"
      justify="center"
      align="middle"
    >
      <Col xl={2} xs={0}></Col>
      <Col
        xl={12}
        xs={22}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center"
        }}
      >
        <Col 
        span={16}
        xl={16}
        xs={22}
        >
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <Row className="horizontal-divider">
            <Col
              span={23}
              pull={8}
              style={{
                // backgroundImage:
                //   "-webkit-linear-gradient(0deg, #7e764f 45%, #e8e7e1 45%)",
                // minHeight: "4px",
                // maxHeight: " 4px",
                // width: "95%"
              }}
            ></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Col>
      <Col
      className="img-right-1"
        xl={4} xs={0}
      >
        <div
          style={{
            paddingRight: "5px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            width: "95%"
          }}
        >
          <img
            style={{
              width: "auto",
              height: "22em",
              margin: "10px",
              position: "top",
              left: "50%",
              display: "flex",
              justifyContent: "center",
              left: "50%"
            }}
            src="https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg"
          ></img>
        </div>
      </Col>
      <Col
      className="img-right-2"
        xl={4}
        xs={0}
      >
        <div
          style={{
            paddingRight: "5px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            width: "95%"
          }}
        >
          <img
            style={{ width: "auto", height: "22em", margin: "10px" }}
            src="https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg"
          ></img>
        </div>
      </Col>
      <Col xl={2} xs={0}></Col>
    </Row>
    <Row>
      <Col span={2}></Col>
      <Col span={12}>
        <Col
          span={12}
          style={{ overflow: "hidden", width: "45%", height: "25rem" }}
        >
          <img
            style={{ height: "33rem", position: "relative", right: "13rem" }}
            src="https://travari.s3-us-west-2.amazonaws.com/images/sustainable.jpg"
          ></img>
        </Col>
        <Col span={12} style={{ padding: "15px" }}>
          <p>{text1}</p>
          <p>{text2}</p>
        </Col>
      </Col>
      <Col span={8} style={{ padding: "15px 0" }}>
        <p>{text3}</p>
        <div className="button-div">
          <Button
            style={{
              letterSpacing: "0.2em",
              width: "10rem",
              height: "2.2rem",
              fontSize: ".8rem",
              backgroundColor: "black",
              border: "none",
              color: "white"
            }}
          >
            Contáctanos
          </Button>
        </div>
      </Col>
      <Col span={2}></Col>
    </Row>
  </div>
);
export default AboutSection;
