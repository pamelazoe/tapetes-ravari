import React from 'react';
import { Row, Col, Icon } from 'antd';

const TopBanner = ({ phone, email }) => (
<div className="bannerTop">
<Row type="flex" justify="center" align="middle" style={{width:"100%", height:"2rem", backgroundColor:"black"}}>
  <Col span={2} xl={2} xs={0} />
  <Col span={12} xl={12} xs={0} />
  <Col span={4} xl={4} xs={12}
  >
  <div className="join2" style={{display:"flex", justifyContent:"flex-end", alignItems:"center", padding:"0 20px"}}>
  <Icon type="phone" style={{transformOrigin:"0.5em 0.5em", height:"100%", fontSize:"16px", color:"white"}}/>
        <a href="tel:(55) 5555 5555" style={{color:"white", display:"flex"}}>
        <p style={{color:"white"}}>{phone}</p>
        </a>
      </div>
  </Col>
  <Col span={4} xl={4} xs={12}>
      <div className="join2" style={{display:"flex", justifyContent:"flex-end", alignItems:"center", padding:"0 20px"}}>
      <Icon type="mail" style={{color:"white"}} />
        <a href="ventas@travari.mx" style={{color:"white", display:"flex"}}>
        <p style={{color:"white"}}>{email}</p>
        </a>
      </div>
  </Col>
  <Col span={2} xl={2} xs={0}>
  </Col>
  {/* <Col span={8} md={12} lg={18} xl={18} xxl={18}>
    <Row type="flex" justify="end" align="bottom" style={{height:"100%"}}>
      <Col xs={16} md={16} lg={3}>
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
 */}
 </Row>
 <style jsx>{`
      p {
        padding:0;
        margin:0 5px;
      }
      @media (max-width: 576px){
        .join2 a p {
          font-size: 0.85rem;
        }
      }
    `}</style>
</div>
)

export default TopBanner;