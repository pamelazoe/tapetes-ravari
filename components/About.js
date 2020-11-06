import React from 'react';
import { Col, Row, Button } from 'antd';
import '../styles/about.css';

const AboutSection = ({ title, subtitle, text1, text2, text3, rpanelimg1 }) => (
  <div className='about'>
    <Row className='about-header' type='flex' justify='center' align='middle'>
      <Col xl={2} md={2} xs={0}></Col>
      <Col xl={12} md={14} xs={22}>
        <Col span={16} xl={16} md={18} xs={22}>
          <div className='title'>{title}</div>
          <div className='subtitle'>{subtitle}</div>
          <Row className='horizontal-divider'>
            <Col span={23} pull={8}></Col>
          </Row>
        </Col>
        <Col span={6} md={6} />
      </Col>
      <Col className='img-right-1' xl={4} md={0} xs={0}>
        <div className='img1-right-panel'>
          <img src='https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg' />
        </div>
      </Col>
      <Col className='img-right-2' xl={4} md={6} xs={0}>
        <div className='img1-right-panel'>
          <img src='https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg' />
        </div>
      </Col>
      <Col xl={2} md={2} xs={0}></Col>
    </Row>
  </div>
);
export default AboutSection;
