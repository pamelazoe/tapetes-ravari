import React from "react";
import { Row, Col, Layout, Divider, Icon } from "antd";


const { Footer, Content } = Layout;

const PageFooter = ({ by, legal, terms }) => (
  <footer>
    <Footer style={{ backgroundColor: "#7E764F", height: "28rem", display:"flex",
                    justifyContent:"space-between", flexDirection:"column",
                    alignContent:"space-around", backgroundImage: "url(https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png)",
                    }}>
      <Row
        type="flex"
        justify="space-between"
        align="middle"
        style={{ width: "100%"}}
      >
        <Col span={8} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
        
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <a href="https://www.facebook.com/tapetesravari/">
          <img style={{height:"70px", width:"70px", display:"flex", justifyContent:"center", margin:"30px"}} src="https://travari.s3-us-west-2.amazonaws.com/images/fblogo.png"></img>
          </a>
          <a href="https://www.instagram.com/tapetesravari/" >
          <img style={{height:"70px", width:"70px", display:"flex", justifyContent:"center", margin:"30px"}} src="https://travari.s3-us-west-2.amazonaws.com/images/instalogo.png"></img>
          </a>
          
        </Col>
        <Col span={8} style={{ height: "10rem" }}></Col>
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ display: "flex", justifyContent: "center" }}
      >
        
        <Col span={8}></Col>
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src="https://travari.s3-us-west-2.amazonaws.com/images/travari-logo-white.png"
            style={{ width: "12rem" }}
            alt=""
          ></img>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col span={5} style={{ height: "5rem" }}></Col>
        <Col span={14} style={{ height: "5rem" }}>
          <div
            className="legal"
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"15px"
            }}
          >
            <a
              href="#"
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white"
              }}
            >
              {by}
            </a>
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
            <a
              href="#"
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white"
              }}
            >
              {legal}
            </a>
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
            <a
              href="#"
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white"
              }}
            >
              {terms}
            </a>
          </div>
        </Col>
        <Col span={5} style={{ height: "5rem" }}></Col>
      </Row>

      <style jsx>{`
        .ant-divider ant-divider-vertical {
          position: relative;
          top: 15px;
        }
        a {
          padding: 0;
        }
      `}</style>
    </Footer>
  </footer>
);

export default PageFooter;
