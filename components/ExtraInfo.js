import React from 'react'
import { Row, Col } from 'antd'
import "../styles/extrainfo.css"

const ExtraInfo = ({headerInfo, contentInfo, li1, li2, li3, li4, li5}) => (
    <div className="extra-info">
        <Row type="flex" justify="start" align="top">
            <Col
            span={2}
            xl={2}
            md={2}
            xs={2}
            />
            <Col
            className="head-extra-info"
            span={10}
            xl={10}
            md={10}
            xs={20}
            >
            <div className="info-head">{headerInfo}</div>
            <Row>
            <Col
              span={23}
              xl={23}
              md={24}
              pull={8}
              style={{
                backgroundImage:
                  "-webkit-linear-gradient(0deg, rgb(126, 118, 79) 60%, rgb(232, 231, 225) 45%)",
                minHeight: "2px",
                maxHeight: "2px",
                width:"80%",
               
              }}
            ></Col>
          </Row>
          
          <Row>
              <div className="info-content">
          <p>{contentInfo}</p>
          <ul>
            <li>{li1}</li>
              <li>{li2}</li>
              <li>{li3}</li>
              <li>{li4}</li>
              <li>{li5}</li>
          </ul>
          </div>
          </Row>
            
            </Col>
            
            <Col
            span={10}
            xl={10}
            md={10}
            xs={24}
            style={{overflow:"hidden"}}>
            <Row className="extra-info-image" type="flex" align="middle" justify="center">
                <img src="https://travari.s3-us-west-2.amazonaws.com/images/mosaic-rug.jpg"/>
                </Row>
            </Col>
            
            <Col
            span={2}
            xl={2}
            md={2}
            xs={2}
            />
        </Row>
    </div>
)

export default ExtraInfo