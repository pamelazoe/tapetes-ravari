import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import "../styles/contactform.css"
const { TextArea } = Input;

class ContactForm extends React.Component {
  render() {
    return (
      <div>
      <Form layout="horizontal">
        <Row>
          
          <Col
          span={12}
          xl={12}
          lg={12}
          xs={24}
          >
          <Row>
            Nombre
            </Row>
        <Form.Item> 
            <Input
            />
        </Form.Item>
        </Col>
        <Col
        className="email"
        span={12}
        xl={12}
        lg={12}
        xs={24}
        >
        <Row>
            Email
            </Row>
        <Form.Item>
            <Input
            />
        </Form.Item>
        </Col>
        </Row>
        <Row>
          <Col
          span={24}
          xl={24}
          lg={24}
          xs={24}
          >
          <Row>
            Ubicación
            </Row>
        <Form.Item>
            <Input typestyle={{ width: '100%', marginRight: '3%'}}
            />
        </Form.Item>
        </Col>
        </Row>
        <Row>
          <Col span={24}>
          <Row>
            Mensaje
            </Row>
        <Form.Item >
            <TextArea rows={3} style={{ width: '100%', marginRight: '3%'}}
            />
        </Form.Item>
        </Col>
        </Row>
        <Row>
        <Col
        span={12}
        xl={12}
        lg={12}
        xs={24}
        >
          <Form.Item>
          <Button
          className="send-form" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
        </Col>
          <Col
          span={12}
          xl={12}
          lg={12}
          />
        </Row>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
