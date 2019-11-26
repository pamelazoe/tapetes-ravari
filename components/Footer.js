import React from "react";
import { Row, Col, Layout, Divider, Icon } from "antd";
import "../styles/footer.css";

const { Footer, Content } = Layout;

const PageFooter = ({ by, legal, terms }) => (
  <footer>
    <Footer className="footer-wraper">
      <Row type="flex" justify="space-between" align="middle">
        <Col
          span={8}
        />
        <Col className="socialmedia-icons" span={8}>
          <a href="https://www.facebook.com/tapetesravari/">
            <img src="https://travari.s3-us-west-2.amazonaws.com/images/fblogo.png" />
          </a>
          <a href="https://www.instagram.com/tapetesravari/">
            <img src="https://travari.s3-us-west-2.amazonaws.com/images/instalogo.png" />
          </a>
        </Col>
        <Col span={8} />
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col span={8} />
        <Col className="logo-white" span={8}>
          <img
            src="https://travari.s3-us-west-2.amazonaws.com/images/travari-logo-white.png"
            alt=""
          ></img>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col
        span={5}
        xl={5}
        xs={0}
        />
        <Col span={14} className="by-legal-terms">
          <div className="legal">
            <a href="#">{by}</a>
            <Divider
              type="vertical"
              style={{
                border: "solid white 1px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px"
              }}
            />
            <a href="#">{legal}</a>
            <Divider
              type="vertical"
              style={{
                border: "solid white 1px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px"
              }}
            />
            <a href="#">{terms}</a>
          </div>
        </Col>
        <Col
        span={5}
        xl={5}
        xs={0}
        />
      </Row>
    </Footer>
  </footer>
);

export default PageFooter;
