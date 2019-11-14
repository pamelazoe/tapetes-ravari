import React from 'react';
import {Col, Row} from 'antd';

const Catalog = () => (
    
    <Row gutter={24} type="flex" justify="center" align="middle"
    style={{paddingTop:"100px", paddingBottom:"100px", width:"100%"}}>
        <Col span={2}></Col>
        <Col span={10} style={{overflow:"hidden"}}>
            <div>
                <a href="">
                    <img src="https://travari.s3-us-west-2.amazonaws.com/images/mata-pod-dywan.jpg" alt="" style={{backgroundColor:"black"}}/>
                </a>
            </div>
        </Col>
        <Col span={10} style={{overflow:"hidden"}}>
        <div>
                <a href="">
                    <img src="https://travari.s3-us-west-2.amazonaws.com/images/mata-pod-dywan.jpg" alt="" style={{backgroundColor:"black"}}/>
                </a>
            </div>
        </Col>
        <Col span={2}></Col>
        <style jsx>{`
        img {
            -webkit-filter: brightness(100%);
            -webkit-transition: opacity 1s ease-in-out;
            -moz-transition: opacity 1s ease-in-out;
            -ms-transition: opacity 1s ease-in-out;
            -o-transition: opacity 1s ease-in-out;
            transition: opacity 1s ease-in-out;
            opacity: 1;
        }
        
        img:hover {
            -webkit-filter: brightness(60%);
        }
     
      `}</style>
    </Row>
)

export default Catalog