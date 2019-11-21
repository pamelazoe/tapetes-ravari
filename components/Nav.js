import React from "react";
import Link from "next/link";
import { Menu, Affix, Col, Row, Layout, Icon } from "antd";
import TopBanner from '../components/TopBanner'
import "../index.css"

const Nav = ({ home, about, services, contact, phone, email }) => (
  <div className="navbar" style={{ backgroundColor: "white", zIndex:"50000000000", display:"flex", flexFlow:"column"}}>
{/* <TopBanner
phone="(55) 5555 5555" email="ventas@travari.mx"
/> */}
    <Affix style={{zIndex:"1000"}} offsetTop={0}>   
    <div>   
    <Row type="flex" justify="center" align="middle"
    style={{display:"flex", justifyContent:"center", justifyItems:"center", alignItems:"center", background:"white", zIndex:"1500"}}>
      <Col span={2}></Col>
      <Col span={10}>
        <Link href="/#contact">
        <a>
              <img src="https://travari.s3-us-west-2.amazonaws.com/images/travari-logo.jpg" style={{maxHeight:"3rem", display:"flex", justifyContent:"flex-start", margin:"0"}} alt=""></img>
          </a>
        </Link>
      </Col>
      <Col span={10} style={{display:"flex", justifyContent:"flex-end", background:"white"}}>
        <Menu mode="horizontal" style={{marginTop:"20px",marginBottom:"20px", display:"flex", justifyContent:"end"}}>
        <Menu.Item key="home" >
          {/* <a href="/" target="_blank" rel="noopener noreferrer"></a> */}
          <Link href="/">
          <a>
             INICIO
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          {/* <a href="/" target="_blank" rel="noopener noreferrer"></a> */}
       
          <Link href="/about">
            <a>
              NOSOTROS
            </a>
          </Link>
         
        </Menu.Item>
        <Menu.Item key="services">
          {/* <a href="/" target="_blank" rel="noopener noreferrer"></a> */}
          <Link href="/services">
            <a>
              SERVICIOS
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          {/* <a href="/" target="_blank" rel="noopener noreferrer"></a> */}
          <Link href="/#contact">
            <a>
              CONTACTO
            </a>
          </Link>
        </Menu.Item>
        </Menu>
      </Col>
      <Col span={2}></Col>
    </Row>
    </div>
    </Affix>
    <style global jsx>{`
             .ant-menu-horizontal{
          border-bottom:none;
        }
        .ant-menu-horizontal > .ant-menu-item > a:hover {
          color:black;
          border:none;
          text-decoration:none;
        }
        .ant-menu-horizontal > .ant-menu-item > a:active {
          color:black;
        }
        .ant-menu-item-active {
          border-bottom: 2px solid transparent !important;
          color: inherit !important;
        }
      `}</style>
  </div>
);

export default Nav;