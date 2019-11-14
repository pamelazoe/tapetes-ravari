import React from 'react';
import { Row, Col, Layout, Divider, Icon } from 'antd'


const {
    Footer, Content
  } = Layout;

const PageFooter = ({by, legal, terms}) => (
<Footer style={{backgroundColor:"#7E764F"}}>
<footer >
    {/* <Row type="flex" justify="center" align="middle" style={{height:"20rem", width:"100%"}} >
        <Content>
            <Row type="flex" justify="center" align="middle">
                <Col span={8} style={{display:"flex", justifyContent:"center"}}>
                    <img src="https://travari.s3-us-west-2.amazonaws.com/images/travari-logo.jpg" 
                    style={{width:"10rem"}}
                    alt=""></img>
                </Col>
            </Row>
        </Content>
    </Row> */}
     <Row type="flex" justify="center" align="middle" style={{width:"100%"}}>
      <Col span={8} style={{height:"10rem"}}></Col>
      <Col span={8} style={{height:"10rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Icon type="facebook" style={{fontSize:"3rem", margin:"10px", color:"white"}} />
      <Icon type="instagram" style={{fontSize:"3rem", margin:"25px", color:"white"}}/>
      <i className="fab fa-instagram"></i>
      </Col>
      <Col span={8} style={{height:"10rem"}}></Col>
    </Row>
    <Row type="flex" justify="center" align="middle" 
    style={{display:"flex", justifyContent:"center"}}>
      <Col span={8} >
      </Col>
      <Col span={8} style={{height:"10rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <img src="https://travari.s3-us-west-2.amazonaws.com/images/travari-logo.jpg" 
                    style={{width:"10rem"}}
                    alt=""></img>
      </Col>
      <Col span={8}></Col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <Col span={5} style={{height:"5rem"}}></Col>
      <Col span={14} style={{height:"5rem"}}>
          
      <div className="legal" style={{height:"100%", width:"100%", display:"flex", justifyContent:"center"}}>
<a href="#" style={{display:"flex", justifyContent:"center", color:"white"}}>{by}</a>
    <Divider type="vertical" style={{border:"solid white 1px", display:"flex", justifyContent:"center", alignItems:"center", height:"30px"}}/>
    <a href="#" style={{display:"flex", justifyContent:"center", color:"white"}}>{legal}</a>
    <Divider type="vertical" style={{border:"solid white 1px", display:"flex", justifyContent:"center", alignItems:"center", height:"30px"}}/>
    <a href="#" style={{display:"flex", justifyContent:"center", color:"white"}}>{terms}</a>
  </div>
      </Col>
      <Col span={5} style={{height:"5rem"}}></Col>
    
    </Row>
</footer>
<style jsx>{`
        .ant-divider ant-divider-vertical { 
            position:relative;
            top:15px;  
        }
        a {
          padding:0;
        }
      `}</style>

</Footer>
)

export default PageFooter;
