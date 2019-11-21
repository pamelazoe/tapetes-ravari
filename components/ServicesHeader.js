import React from 'react'
import { Col, Row } from 'antd'

const ServicesHeader = ({sectionHeader}) => (
  <Row>
        <Col span={2}></Col>
        <Col span={10}></Col>
        <Col span={10} style={{display: "flex", justifyContent: "flex-end"}}>
            <div style={{display:"flex", justifyContent:"end"}}>
            {sectionHeader}
            </div>
        </Col>
      <Col span={2}></Col>
    </Row>
    );

    export default ServicesHeader;