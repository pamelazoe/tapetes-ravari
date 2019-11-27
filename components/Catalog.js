import React from 'react';
import {Col, Row} from 'antd';
import "../styles/catalog.css"

const Catalog = ({cat1, cat2}) => (
   //<div className="show-desktop-hide-mobile">
    <Row gutter={24} type="flex" justify="center" align="middle"
    style={{margin:"3rem 0", width:"100%", height:"22rem", overflow:"hidden"}}>
        <Col xl={2} xs={0} md={2}/>
        <Col xl={20}
        xs={20}
        md={20}
        style={{height:"100%", display:"flex", justifyContent:"center", padding:"0", overflow:"hidden"}}>
            <div className="classic-img">
                <div className="x2">
                    <div className="x3">
                       <div className="modelHeader">Modelos</div>
                       <div className="modelType">Clásicos</div>
                    </div>
                </div>
            </div>
            
            <div className="modern-img">
                <div className="x2">
                    <div className="x3">
                       <div className="modelHeader">Modelos</div>
                       <div className="modelType">Modernos</div>
                    </div>
                </div>
            </div>
            
        </Col>
        <Col
        xl={2}
        md={2}
        xs={0}
        ></Col>
    </Row>
    //</div>
)

export default Catalog
