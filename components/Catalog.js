import React from 'react';
import {Col, Row} from 'antd';
import "../styles/catalog.css"

const Catalog = ({cat1, cat2}) => (
   
    <Row gutter={24} type="flex" justify="space-between" align="middle"
    style={{margin:"3rem 0", width:"100%", height:"20rem", overflow:"hidden"}}>
        <Col span={2} xs={1} />
        <Col span={20} xs={22} 
        style={{height:"100%", display:"flex", justifyContent:"space-between", padding:"0", overflow:"hidden"}}>
            <div className="classic-img" style={{
        //background:"url(https://travari.s3-us-west-2.amazonaws.com/images/classic.jpg)",
        //backgroundSize:"40rem",
        }}>
          
                <div className="x2" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden"}}>
                    <div className="x3" style={{width:"calc(100% - 3rem)", borderRight:"solid 1px white", borderBottom:"solid 1px white",
                    height:"calc(100% - 3rem)", display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column", overflow:"hidden"}}>
                       <div className="modelHeader">Modelos</div>
                       <div className="modelType">Clásicos</div>
                    </div>
                </div>
            </div>
            
            <div className="modern-img" 
            style={{
        //background:"url(https://travari.s3-us-west-2.amazonaws.com/images/mata-pod-dywan.jpg)",
        // backgroundSize:"40rem",  backgroundRepeat:"no-repeat",
        // backgroundPosition:"bottom"
        }}>
          
                <div className="x2" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden"}}>
                    <div className="x3" style={{width:"calc(100% - 3rem)", borderRight:"solid 1px white", borderBottom:"solid 1px white",
                    height:"calc(100% - 3rem)", display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column", overflow:"hidden"}}>
                       <div className="modelHeader">Modelos</div>
                       <div className="modelType">Modernos</div>
                    </div>
                </div>
            </div>
            
        </Col>
        <Col span={2} xs={1}></Col>
        
        <style jsx>{`
        
     
      `}</style>
    </Row>
)

export default Catalog
