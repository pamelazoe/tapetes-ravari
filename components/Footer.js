import React from "react";
import { Row, Col, Layout, Divider, Icon } from "antd";
import "../styles/footer.css";

const { Footer, Content } = Layout;

const PageFooter = ({ by, legal, terms, fblink, fblogo }) => (
  <footer>
    <Footer className="footer-wraper">
      <Row type="flex" justify="space-between" align="middle">
        <Col
          span={8}
        />
        <Col className="socialmedia-icons" span={8}>
          <a href={fblink}>
            <img src={require(fblogo)} />
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
      <Row type="flex" justify="center" align="middle"
      style={{position:"relative", width:"100%"}}>
        <Col
        span={5}
        xl={5}
        xs={0}
        />
        <Col
        span={14}
        xl={14}
        xs={24}
        className="by-legal-terms">
          <div className="legal">
          <div className="link-text">
            <a href="#">
              {by}
              </a>
              </div>
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
            <div className="link-text">
            <a href="#">
              {legal}
              </a>
              </div>
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
            <div className="link-text">
            <a href="#">
              {terms}
              </a>
              </div>
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
