import React from "react";
import { Row, Col, Typography, Icon } from "antd";
import ContactForm from "./ContactForm"
import "../styles/contact.css"

const Contact = ({
  contactTitle,
  contactContent,
  contactPhone,
  location,
  schedule
}) => (
  <div
    id="contact-section"
    //style={{ backgroundColor: "black", color: "white", height:"30rem", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden" }}
  >
    <Row type="flex" justify="center">
      <Col
      //span={2}
      xl={2}
      lg={2}
      xs={0}
      style={{backgroundColor:"transparent"}}
      />
      <Col
        //span={10}
        xl={10}
        lg={10}
        xs={24}
        // style={{
        //   padding: "0 6rem",
        //   height: "100%",
        //   display: "flex",
        //   flexFlow: "column",
        // }}
      >
        <Col
        span={2}
        xl={2}
        lg={2}
        xs={0}
        />
        <div className="contact-title" >
        <Row type="flex" justify="start">
          <h1>{contactTitle}</h1>
        </Row>
        </div>
        <Row>
          <p style={{ color: "white" }}>{contactContent}</p>
        </Row>
        <Row>
          <Col
          span={2}
          xs={2}
          lg={2}
          xl={2}
          >
            <Icon type="phone" />
          </Col>
          <Col
          span={22}
          xl={22}
          lg={22}
          xs={22}
          >
            <p style={{ color: "white" }}>{contactPhone}</p>
          </Col>
        
          <Col
          span={2}
          xl={2}
          lg={2}
          xs={2}
          >
            <Icon type="api" />
          </Col>
          <Col
          span={22}
          xl={22}
          lg={22}
          xs={22}
          >
            <p style={{ color: "white" }}>{location}</p>
          </Col>
         
          <Col
          span={2}
          xs={2}
          lg={2}
          xl={2}
          >
            <Icon type="schedule" />
          </Col>
          <Col
          span={22}
          xl={22}
          lg={22}
          xs={22}
          style={{display:"flex", justifyContent:"center"}}>
            <p style={{ color: "white" }}>{schedule}</p>
          </Col>
        </Row>
      </Col>
      <Col
      span={10}
      xl={10}
      lg={10}
      xs={24}
      style={{display:"flex", justifyContent:"center", alignContent:"center", alignItems:"center"}}>

        <ContactForm />
      </Col>
      <Col
      span={2}
      xl={2}
      lg={2}
      xs={0}
      />
    </Row>
    <style jsx>{`
        .ant-typography h1 {   
          margin:0;
        }
        .contact-title {
          color: "white";
        }
        h1 {
          color:white;
        }
        p {
          font-size: .8rem;
        }
        
      `}</style>
  </div>
);

export default Contact;
