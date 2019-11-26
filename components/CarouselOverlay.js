import React from 'react';
import { Typography, Button, Row, Col } from 'antd';
//import '../styles/carouseloverlay.css'

const { Text, Title } = Typography;

const CarouselOverlay = ({line1, line2, text, button1, button2}) => (
    <div className="color-overlay">
        <Row type="flex" justify="start" align="middle">
        <Col
        xs={24}
        // span={18}
        // push={5}
        >
        <Title level={1} style={{color:"white", letterSpacing:" 0.15em", fontWeight:"bold", marginBottom:"0"}}>{line1.toUpperCase()}</Title>
        <Title level={1} style={{marginTop:"0", color:"white", letterSpacing:" 0.2em", fontWeight:"lighter"}}>{line2.toUpperCase()}</Title>
        <Text style= {{letterSpacing:" 0.05em", color:"white", marginBottom:"5px"}}>{text}</Text>
        <Row>
        <Button shape="round" style={{marginTop:"1.5rem", letterSpacing:"0.2em", marginRight:"1rem", width:"10rem", height:"45px", fontSize:".8rem", backgroundColor:"#7E764F", border:"none", color:"white"}}>
          {button1.toUpperCase()}
        </Button>
        <Button shape="round" style={{marginTop:"1.5rem", letterSpacing:"0.2em", width:"10rem", height:"45px", fontSize:".8rem", backgroundColor:"#141414", border:"none", color:"white"}}>
          {button2.toUpperCase()}
        </Button>
        </Row>
        </Col>
        </Row>
    </div>
)

export default CarouselOverlay;