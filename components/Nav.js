import React, { Children } from "react";
import Link from "next/link";
import { Menu, Affix, Col, Row, Layout, Icon } from "antd";
import TopBanner from '../components/TopBanner'

// const {
//   Header
// } = Layout;

const Nav = ({ home, about, services, contact, children }) => (
  
  <div className="navbar" style={{ backgroundColor: "white", zIndex:"500", display:"block", flexFlow:"column"}}>
<TopBanner phone="(55) 5555 5555" email="ventas@travari.mx"/>
    <Affix offsetTop={0}>      
          {/* <Row justify="space-around" type="flex" style={{backgroundColor:"white", height:"70px"}}>
          <Col push={3}
              span={4}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                cursor: "pointer"
              }}
            >
              <div className="base-image-container"
                style={{ backgroundColor: "transparent" }}
              >
                <a href="/">
                    <img src="https://travari.s3-us-west-2.amazonaws.com/images/travari-logo.jpg" style={{maxHeight:"3rem", display:"flex", justifyContent:"center", margin:"0"}} alt=""></img>
                </a>
              </div>
            </Col>
      <Col span={20} pull={3} style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', textTransform: 'uppercase' }}>
        <div style={{ width: 'fit-content(500px)', margin: 'auto 0px' }}>
          <Link href="/">
            <a>
              {home}
            </a>
          </Link>
        </div>
        <div style={{ width: 'fit-content(500px)', margin: 'auto 0px' }}>
          <Link href="/about">
            <a>
              {about}
            </a>
          </Link>
        </div>
        <div style={{ width: 'fit-content(500px)', margin: 'auto 0px' }}>
          <Link href="/services">
            <a>
              {services}
            </a>
          </Link>
        </div>
        <div style={{ width: 'fit-content(500px)', margin: 'auto 0px' }}>
          <Link href="/contact">
            <a>
              {contact}
            </a>
          </Link>
        </div>
      </Col>
    </Row> */}

    <Row type="flex" justify="center" align="middle"
    style={{display:"flex", justifyContent:"center", justifyItems:"center", alignItems:"center", background:"white"}}>
      <Col span={3}></Col>
      <Col span={9}>
        <Link href="/#contact">
        <a>
              <img src="https://travari.s3-us-west-2.amazonaws.com/images/travari-logo.jpg" style={{maxHeight:"3rem", display:"flex", justifyContent:"center", margin:"0"}} alt=""></img>
          </a>
        </Link>
      </Col>
      <Col span={9} style={{display:"flex", justifyContent:"center", background:"white"}}>
        <Menu mode="horizontal" style={{marginTop:"20px",marginBottom:"20px", display:"flex", justifyContent:"center"}}>
        <Menu.Item key="home" >
          {/* <a href="/" target="_blank" rel="noopener noreferrer"></a> */}
          <Link href="/">
            <a>
              {home.toUpperCase()}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          {/* <a href="/" target="_blank" rel="noopener noreferrer"></a> */}
       
          <Link href="/about">
            <a>
              {about.toUpperCase()}
            </a>
          </Link>
         
        </Menu.Item>
        <Menu.Item key="services">
          {/* <a href="/" target="_blank" rel="noopener noreferrer"></a> */}
          <Link href="/services">
            <a>
              {services.toUpperCase()}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          {/* <a href="/" target="_blank" rel="noopener noreferrer"></a> */}
          <Link href="/contact">
            <a>
              {contact.toUpperCase()}
            </a>
          </Link>
        </Menu.Item>
        </Menu>
      </Col>
      <Col span={3}></Col>
    </Row>
    </Affix>
    <style global jsx>{`
        .ant-menu-item {
          display:flex;
          justify-content:center;
        }
        a {
          height:100%;
        }
        li{
          display:flex;
          justify-content:center;
        }
        .ant-menu-horizontal{
          border-bottom:none;
        }
        .ant-menu-item-active::selection{
          background:red;
          color:red;
        }
        .ant-menu-horizontal > .ant-menu-item > a:hover {
          color:black;
          font-weight:bold;
          border:none;
          text-decoration:none;
        }
        .ant-menu-horizontal > .ant-menu-item > a:active {
          color:black;
          font-weight:bold;
          border:solid;
        }
         a:hover{
          text-decoration:none;
        }
      `}</style>
  </div>
);

export default Nav;