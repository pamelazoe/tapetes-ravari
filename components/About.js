import React from "react";
import { Col, Row, Typography, Button } from "antd";
const { Title } = Typography;

const AboutSection = ({ title, subtitle, text1, text2, text3 }) => (
  <div className="about" style={{ paddingBottom:"2rem" }}>
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{
        marginTop: "50px",
        marginBottom: "0",
        width: "100%",
        height: "25vw",
        overflow: "hidden",
      }}
    >
        <Col span={2}></Col>
      <Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          alignContent:"center",
          alignSelf:"center",
       
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
        span={4}
        style={{
          display: "flex",
          justifyContent: "start",
          alignContent: "middle",
          overflow:"hidden"
        }}
      >
        <div style={{paddingRight:"5px", overflow:"hidden", display:"flex", justifyContent:"center", width:"95%"}}>
        <img
          style={{ width: "auto", height:"22em", margin: "10px", position:"top", left:"50%", display:"flex", justifyContent:"center", left:"50%" }}
          src="https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg"
        ></img>
        </div>
        </Col>
        <Col
        span={4}
        style={{
          display: "flex",
          justifyContent: "end",
          alignContent: "middle",
          overflow:"hidden"
        }}
      >
        <div style={{paddingRight:"5px", overflow:"hidden", display:"flex", justifyContent:"center", width:"95%"}}>
        <img
          style={{ width: "auto", height:"22em", margin: "10px" }}
          src="https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg"
        ></img>
        </div>
      </Col>

      {/* <Col
        span={8}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "middle",
          overflow:"hidden"
        }}
      >
        <img
          style={{ width: "25rem", height:"22rem", margin: "10px", position:"top", display:"flex", justifyContent:"center", left:"50%" }}
          src="https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg"
        ></img>
        <img
          style={{ width: "25rem", height:"22rem", margin: "10px" }}
          src="https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg"
        ></img>
      </Col> */}
      {/* <Col span={4} style={{overflow: "hidden", display:"flex" , justifyContent:"center"}}>
       
      <img
          style={{ height:"22rem" }}
          src="https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg"
        />
    
      </Col>
      <Col span={4} style={{overflow: "hidden", display:"flex" , justifyContent:"center"}}>
       >
       
      <img
          style={{ height:"22rem" }}
          src="https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg"
        />
     
      </Col> */}
      <Col span={2}></Col>
    </Row>
    <Row 
    // style={{ marginBottom: "2rem" }}
    >
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
      <Col span={8} style={{ padding: "15px 0" }}>
        <p>{text3}</p>
        <div className="button-div">
        <Button style={{letterSpacing:"0.2em", width:"10rem", height:"2.2rem", fontSize:".8rem", backgroundColor:"black", border:"none", color:"white"}}>Contáctanos</Button>
        </div>
      </Col>
      <Col span={2}></Col>
    </Row>
    <style jsx>{`
      .title {
        font-size: 1.2rem;
        color: #363636;
      }
      .subtitle {
        font-size: 3rem;
        color: #363636;
        margin-bottom: 2rem;
      }
      p {
        color: #363636;
      }
      .button-div {
        height:9rem;
        display:flex;
        justify-content:end;
        align-items:end;
      }
    //   .ant-col-16 {
    // display: flex;
    // -webkit-box-sizing: border-box;
    // box-sizing: border-box;
    // width: 66.66666667%;
    // flex-flow: column;
    // justify-content: center;
    // align-self: baseline;
    //   }
 

    `}</style>
  </div>
);
export default AboutSection;
