import React from "react";
import { Col, Row, Button } from "antd";
import "../styles/about.css";

const AboutSection = ({ title, subtitle, text1, text2, text3, rpanelimg1 }) => (
  <div className="about">
    <Row className="about-header" type="flex" justify="center" align="middle">
      <Col xl={2} md={2} xs={0}></Col>
      <Col xl={12} md={14} xs={22}>
        <Col span={16} xl={16} md={18} xs={22}>
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <Row className="horizontal-divider">
            <Col span={23} pull={8}></Col>
          </Row>
        </Col>
        <Col span={6} md={6} />
      </Col>
      <Col className="img-right-1" xl={4} md={0} xs={0}>
        <div className="img1-right-panel">
          <img src="https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg" />
        </div>
      </Col>
      <Col className="img-right-2" xl={4} md={6} xs={0}>
        <div className="img1-right-panel">
          <img src="https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg" />
        </div>
      </Col>
      <Col xl={2} md={2} xs={0}></Col>
    </Row>
    <Row>
      <Col span={2} xl={2} md={2} xs={0} />
      <Col span={12} xl={12} md={14} xs={24}>
        <Col className="img-container" span={12} xl={12} md={12} xs={24}>
          <img src="https://travari.s3-us-west-2.amazonaws.com/images/sustainable.jpg" />
        </Col>
        <Col className="text-content1" span={12} xl={12} md={12} xs={24}>
          <p>{text1}</p>
          <p>{text2}</p>
        </Col>
      </Col>
      <Col
        className="img-container2"
        xs={24}
        xl={0}
        gd={0}
        sm={0}
        md={0}
        xxl={0}
      >
        <Col xs={12} xl={0} gd={0} sm={0} md={0} xxl={0}>
          <img
            id="img-left"
            src="https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg"
          />
        </Col>
        <Col xs={12} xl={0} gd={0} sm={0} md={0} xxl={0}>
          <img
            id="img-right"
            src="https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg"
          />
        </Col>
      </Col>
      <Col className="text-secondary" span={8} xl={8} md={6} xs={24}>
        <p>{text3}</p>
        <div className="button-div">
          <Button>Contáctanos</Button>
        </div>
      </Col>
      <Col span={2} xl={2} md={2} xs={0} />
    </Row>
  </div>
);
export default AboutSection;
