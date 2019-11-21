import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import "../contact.css"
const { TextArea } = Input;

class ContactForm extends React.Component {
  render() {
    return (
      <div>
      <Form layout="horizontal">
        <Row style={{color:"white"}}>
          
          <Col span={12} style={{paddingRight:"5px"}}>
          <Row>
            Nombre
            </Row>
        <Form.Item style={{padding:"0", margin:"0"}}> 
            <Input
            />
        </Form.Item>
        </Col>
        <Col span={12} style={{paddingLeft:"5px"}}>
        <Row>
            Email
            </Row>
        <Form.Item style={{padding:"0", margin:"0"}}>
            <Input
            />
        </Form.Item>
        </Col>
        </Row>
        <Row style={{color:"white"}}>
          <Col span={24}>
          <Row>
            Ubicación
            </Row>
        <Form.Item style={{margin:"0"}}>
            <Input typestyle={{ width: '100%', marginRight: '3%'}}
            />
        </Form.Item>
        </Col>
        </Row>
        <Row style={{color:"white"}}>
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
        <Row style={{color:"white"}}>
        <Col span={12}>
        
          <Form.Item>
          <Button htmlType="submit" style={{backgroundColor:"#7E764F", borderColor:"#7E764F", color:"white", width:"100%"}}>
            Enviar
          </Button>
        </Form.Item>
        </Col>
          <Col span={12} />
        </Row>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
