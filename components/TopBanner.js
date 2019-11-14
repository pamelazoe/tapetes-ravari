import React from 'react';
import { Row, Col, Icon } from 'antd';

const TopBanner = ({ phone, email }) => (
<div className="bannerTop">

  {/* <Col span={3}></Col>
  <Col span={9}></Col>
  <Col span={9}>

  </Col>
  <Col span={3}></Col> */}
<Row type="flex" justify="center" align="middle" style={{width:"100%", height:"35px", backgroundColor:"black"}}>
  <Col span={12} md={12} lg={18} xl={18} xxl={18}>
    <Row type="flex" justify="end" align="bottom" style={{height:"100%"}}>
      <Col xs={16} md={12} lg={6}>
        <div className="join" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Icon className="show-desktop-hide-mobile" type="phone" style={{transformOrigin:"0.5em 0.5em", height:"100%", fontSize:"16px", color:"white"}}/>
      <div className="show-desktop-hide-mobile" style={{height:"100%", display:"flex", alignItems:"center", marginLeft:"0.4rem", color:"white"}}>
        <a href="tel:(55) 5555 5555" style={{color:"#b6b6b6", display:"flex"}}>
        {phone}
        </a>
      </div>
      </div>
      </Col>
      <Col xs={3} md={6} lg={7}>
      <div className="join2" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Icon type="mail" className="show-desktop-hide-mobile" style={{color:"white"}} />
      <div className="show-desktop-hide-mobile" style={{height:"100%", display:"flex", alignItems:"center", marginLeft:"0.4rem"}}>
        <a href="ventas@travari.mx" style={{color:"#b6b6b6", display:"flex"}}>
        {email}
        </a>
      </div>
      </div>
      </Col>
    </Row>
  </Col>
</Row>
</div>
)

export default TopBanner;