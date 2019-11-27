import React from "react";
import Link from "next/link";
import { Menu, Affix, Col, Row, Icon, Button, Drawer } from "antd";
import "../styles/nav.css";

class Nav extends React.Component {
  state = {
    current: "mail",
    visible: false
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <div className="show-desktop-hide-mobile">
          <Affix>
            <div className="nav">
              <Row
                className="nav-container"
                type="flex"
                justify="center"
                align="middle"
              >
                <Col span={2} xl={2}/>
                <Col span={10} xl={10}>
                  <Link href="/#contact">
                    <a>
                      <img
                        src="https://travari.s3-us-west-2.amazonaws.com/images/travari-logo.jpg"
                        style={{
                          maxHeight: "3.5rem",
                          display: "flex",
                          justifyContent: "flex-start",
                          margin: "0"
                        }}
                        alt=""
                      ></img>
                    </a>
                  </Link>
                </Col>
                <Col
                  span={10}
                  xl={10}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    background: "white",
                    height: "100%"
                  }}
                >
                  <Menu
                    mode="horizontal"
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      display: "flex",
                      justifyContent: "end"
                    }}
                  >
                    <Menu.Item key="home">
                      <Link href="/">
                        <a>INICIO</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                      <Link href="/about">
                        <a>NOSOTROS</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="services">
                      <Link href="/services">
                        <a>SERVICIOS</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="contact">
                      <Link href="/contact">
                        <a href="/contact">CONTACTO</a>
                      </Link>
                    </Menu.Item>
                  </Menu>
                </Col>
                <Col span={2} xl={2}></Col>
              </Row>
            </div>
          </Affix>
        </div>
        <div className="show-mobile-hide-desktop">
          <Affix>
            <nav className="menuBar">
              <Row
                type="flex"
                justify="center"
                align="middle"
                style={{ height: "100%" }}
              >
                <Col xs={2} />
                <Col xs={16}>
                  <div className="logo">
                    <a>
                      <img
                        src="https://travari.s3-us-west-2.amazonaws.com/images/travari-logo.jpg"
                        style={{
                          maxHeight: "3rem",
                          display: "flex",
                          justifyContent: "flex-start",
                          margin: "0"
                        }}
                        alt=""
                      ></img>
                    </a>
                  </div>
                </Col>
                <Col xs={5}>
                  <Button onClick={this.showDrawer} style={{ width: "100%" }}>
                    <Icon type="menu" />
                  </Button>
                  <Drawer
                    title=" "
                    placement="right"
                    onClose={this.onClose}
                    visible={this.state.visible}
                    maskStyle={{ width: "0%" }}
                    width="100%"
                  >
                    <Menu mode="vertical-right" closable="true">
                      <Menu.Item key="home">
                        <a href="/">INICIO</a>
                      </Menu.Item>
                      <Menu.Item key="about">
                        <a href="/about">NOSOTROS</a>
                      </Menu.Item>
                      <Menu.Item key="services">
                        <a href="/services">SERVICIOS</a>
                      </Menu.Item>
                      <Menu.Item key="contact">
                        <a href="/contact">CONTACTO</a>
                      </Menu.Item>
                    </Menu>
                  </Drawer>
                </Col>
                <Col xs={1} />
              </Row>
            </nav>
          </Affix>
        </div>
      </div>
    );
  }
}

export default Nav;
