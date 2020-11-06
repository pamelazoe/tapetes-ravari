import React from 'react';
import { Row, Col, Icon } from 'antd';
import ContactForm from './ContactForm';
import {
  PhoneOutlined,
  EnvironmentFilled,
  ClockCircleFilled,
} from '@ant-design/icons';
import '../styles/contact.css';

const Contact = ({
  contactTitle,
  contactContent,
  contactPhone,
  location,
  schedule,
}) => (
  <div id='contact-section'>
    <Row type='flex' justify='center' align='middle'>
      <Col xl={3} md={2} lg={3} xs={2} />
      <Col className='contact-panel' xl={7} lg={8} md={9} xs={20}>
        <Col span={2} xl={2} lg={2} md={2} xs={0} />
        <div className='contact-title'>
          <Row type='flex' justify='start' align='middle'>
            <h1>{contactTitle}</h1>
          </Row>
        </div>
        <Row>
          <p>{contactContent}</p>
        </Row>
        <Row>
          <Col span={2} xs={2} md={2} lg={2} xl={2}>
            <PhoneOutlined style={{ color: 'white' }} />
          </Col>
          <Col
            className='contact-body'
            span={22}
            xl={22}
            lg={22}
            md={22}
            xs={22}
          >
            <p>{contactPhone}</p>
          </Col>

          <Col span={2} xl={2} lg={2} md={2} xs={2}>
            <EnvironmentFilled />
          </Col>
          <Col span={22} xl={22} lg={22} md={22} xs={22}>
            <p>{location}</p>
          </Col>

          <Col span={2} xs={2} lg={2} md={2} xl={2}>
            <ClockCircleFilled />
          </Col>
          <Col span={22} xl={22} lg={22} md={22} xs={22}>
            <p>{schedule}</p>
          </Col>
        </Row>
      </Col>
      <Col xl={4} lg={1} md={2} xs={2} sm={0} />
      <Col xl={0} lg={0} md={0} xs={3} sm={0} />
      <Col span={10} xl={7} lg={10} md={9} xs={18}>
        <ContactForm />
      </Col>
      <Col span={2} xl={3} lg={2} md={2} xs={3} />
    </Row>
  </div>
);

export default Contact;
