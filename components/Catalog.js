import React from 'react';
import { Col, Row } from 'antd';
import '../styles/catalog.css';

const Catalog = ({ cat1, cat2 }) => (
  <div className='catalog-section'>
    <Row gutter={24} type='flex' justify='center' align='middle'>
      <Col xl={2} xs={0} md={2} />
      <Col className='catalog-img-container' xl={20} xs={20} md={20}>
        <div className='classic-img'>
          <div className='x2'>
            <div className='x3'>
              <div className='modelHeader'>Modelos</div>
              <div className='modelType'>Clásicos</div>
            </div>
          </div>
        </div>

        <div className='modern-img'>
          <div className='x2'>
            <div className='x3'>
              <div className='modelHeader'>Modelos</div>
              <div className='modelType'>Modernos</div>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={2} md={2} xs={0}></Col>
    </Row>
  </div>
);

export default Catalog;
