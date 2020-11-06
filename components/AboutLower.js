import React from 'react';
import { Col, Row, Button } from 'antd';
import '../styles/about.css';

const AboutLower = ({ title, subtitle, text1, text2, text3, rpanelimg1 }) => (
  <div className='about-sec'>
    <Row type='flex'>
      <Col span={2} xl={2} md={2} xs={0} />

      <Col span={6} xl={6} md={6} xs={24}>
        <Col className='img-container' span={24} xl={24} md={24} xs={24}>
          <img src='https://travari.s3-us-west-2.amazonaws.com/images/sustainable.jpg' />
        </Col>
      </Col>
      <Col className='text-content1' span={6} xl={6} md={6} xs={24}>
        <p>{text1}</p>
        <p>{text2}</p>
      </Col>

      <Col className='text-secondary' span={8} xl={8} md={8} xs={24}>
        <p>{text3}</p>
        <div className='button-div'>
          <Button>Contáctanos</Button>
        </div>
      </Col>
      <Col span={2} xl={2} md={2} xs={0} />
    </Row>
  </div>
);
export default AboutLower;
