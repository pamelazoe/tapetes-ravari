import React from 'react'
import { Row, Col } from 'antd'

const ExtraInfo = ({headerInfo, contentInfo, li1, li2, li3, li4, li5}) => (
    <div className="extra-info">
        <Row type="flex" justify="start" align="top">
            <Col span={2}></Col>
            <Col span={10}>
            <div className="info-head">{headerInfo}</div>
            <Row>
            <Col
              span={23}
              pull={8}
              style={{
                backgroundImage:
                  "-webkit-linear-gradient(0deg, #7e764f 45%, #e8e7e1 45%)",
                minHeight: "4px",
                maxHeight: " 4px",
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
            
            <Col span={10} style={{overflow:"hidden"}}>
            <Row type="flex" align="top" justify="center">
                <img style={{width:"45rem"}} src="https://travari.s3-us-west-2.amazonaws.com/images/mosaic-rug.jpg"></img>
                </Row>
            </Col>
            
            <Col span={2}></Col>
        </Row>
        <style jsx>{`
      .info-head {
        font-size: 2.1rem;;
        color: #363636;
        margin-bottom:10px;
      }
      .info-content {
          margin-top:60px;
          padding-right:70px;
      }
      ul {
          padding-left:15px;
      }
      .extra-info {
          margin-bottom:5rem;
      }
      .extra-info {
        height:100%;
      }
    `}</style>
    </div>
)

export default ExtraInfo