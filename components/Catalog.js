import React from 'react';
import {Col, Row} from 'antd';

const Catalog = ({cat1, cat2}) => (
   
    <Row gutter={24} type="flex" justify="space-between" align="middle"
    style={{margin:"5rem 0", width:"100%", height:"20rem", overflow:"hidden"}}>
        <Col span={2}></Col>
        <Col span={20} style={{height:"100%", display:"flex", justifyContent:"space-between", padding:"0", overflow:"hidden"}}>
            <div className="x1" style={{display:"flex", justifyContent:"center", height:"100%", width:"49%", overflow:"hidden",
        background:"url(https://travari.s3-us-west-2.amazonaws.com/images/classic.jpg)", backgroundSize:"40rem",  backgroundRepeat:"no-repeat",
        backgroundPosition:"bottom"}}>
          
                <div className="x2" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden"}}>
                    <div className="x3" style={{width:"calc(100% - 3rem)", borderRight:"solid 1px white", borderBottom:"solid 1px white",
                    height:"calc(100% - 3rem)", display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column", overflow:"hidden"}}>
                       <div className="modelHeader">Modelos</div>
                       <div className="modelType">Clásicos</div>
                    </div>
                </div>
            </div>
            
            <div className="x1" style={{display:"flex", justifyContent:"center", height:"100%", width:"49%", overflow:"hidden",
        background:"url(https://travari.s3-us-west-2.amazonaws.com/images/mata-pod-dywan.jpg)", backgroundSize:"40rem",  backgroundRepeat:"no-repeat",
        backgroundPosition:"bottom"}}>
          
                <div className="x2" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden"}}>
                    <div className="x3" style={{width:"calc(100% - 3rem)", borderRight:"solid 1px white", borderBottom:"solid 1px white",
                    height:"calc(100% - 3rem)", display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column", overflow:"hidden"}}>
                       <div className="modelHeader">Modelos</div>
                       <div className="modelType">Modernos</div>
                    </div>
                </div>
            </div>
            
        </Col>
        <Col span={2}></Col>
        
        <style jsx>{`
        .x1 {
            z-index:3000;
            color: white;
        }
       
        .x2 {
            opacity: 0;
            color: white;
        }
        .x3 {
            opacity: 0;
            color: white;
        }

        .x3:hover {
            opacity: 1;
            color: white;
        }
        .x2:hover {
            opacity: 1;
            background-color:rgb(0,0,0, 0.3);
            color: white;
        }
        .modelHeader {
            font-size: 1.2rem;
            letter-spacing: 0.1em;
        }
        .modelType {
            font-size: 2rem;
            letter-spacing: 0.1em;
        }
     
      `}</style>
    </Row>
)

export default Catalog
