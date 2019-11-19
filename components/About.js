import React from "react";
import { Col, Row } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const AboutSection = ({ title, subtitle, text1, text2, text3 }) => (
  <div className="about" style={{ overflow: "hidden" }}>
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{
        marginTop: "50px",
        marginBottom: "0",
        width: "100%",
        height: "22rem",
        overflow: "hidden"
      }}
    >
        <Col span={2}></Col>
      <Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignContent: "middle"
        }}
      >
        
        <Col span={16}>
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <Row>
            <Col
              span={23}
              pull={8}
              style={{
                backgroundImage:
                  "-webkit-linear-gradient(0deg, #7e764f 45%, #e8e7e1 45%)",
                minHeight: "4px",
                maxHeight: " 4px",
                width:"95%"
              }}
            ></Col>
          </Row>
        </Col>
        <Col span={6}></Col>
      </Col>
      <Col
        span={8}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "middle"
        }}
      >
        <img
          style={{ width: "100%", margin: "10px" }}
          src="https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg"
        ></img>
        <img
          style={{ width: "100%", margin: "10px" }}
          src="https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg"
        ></img>
      </Col>
      <Col span={2}></Col>
    </Row>
    <Row style={{ marginBottom: "2rem" }}>
      <Col span={2}></Col>
      <Col span={12}>
        <Col span={12} style={{ overflow: "hidden", width:"45%", height:"25rem"}}>
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
      <Col span={8} style={{ padding: "15px" }}>
        <p>{text3}</p>
      </Col>
      <Col span={2}></Col>
    </Row>
    <style jsx>{`
      .title {
        font-size: 1.2rem;
        color: #363636;
      }
      .subtitle {
        font-size: 3.5rem;
        color: #363636;
        margin-bottom: 2rem;
      }
      p {
        color: #363636;
      }
    `}</style>
  </div>
);
export default AboutSection;
